const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const fetch = require('./fetch');
const { hostQuestion } = require('./questions/host');
const { loadPagesInfo } = require('./utils/page');
const { getApplicationsQuestion } = require('./questions/builder');
const { authQuestions, getAuthToken } = require('./auth_questions');
const { folderQuestion } = require('./questions/folder');

prompts.override(require('yargs').argv);

function getPagesQuestion(appDir) {
  const pages = loadPagesInfo(appDir);

  return {
    type: 'autocompleteMultiselect',
    name: 'page',
    message: 'Choose page to export:',
    choices: [
      { title: 'All', value: 'all' },
      ...pages.map((page) => ({ title: page.name, value: page })),
    ],
    hint: '- Space to select. Return to submit',
  };
}

async function saveOrUpdatePage({
  host,
  pagesDB,
  pageInfo,
  application,
  headers,
}) {
  const pageDB = pagesDB.find((p) => p.path === pageInfo.path);
  if (pageDB) {
    return fetch({
      url: `${host.builder}/page/${pageDB.id}/`,
      method: 'PUT',
      body: JSON.stringify(pageInfo),
      headers,
    });
  } else {
    return fetch({
      url: `${host.builder}/page/`,
      method: 'POST',
      body: JSON.stringify({ ...pageInfo, application_id: application.id }),
      headers,
    });
  }
}

(async () => {
  try {
    const { host } = await prompts(hostQuestion);
    const authInfo = await prompts(authQuestions);
    const accessToken = await getAuthToken({
      host,
      username: authInfo.username,
      password: authInfo.password,
    });
    const { folderPath } = await prompts(folderQuestion);
    const { application } = await prompts(await getApplicationsQuestion(host));
    const appDir = path.join(folderPath, application.path);
    const pagesInfoQuestion = getPagesQuestion(appDir);
    const { page: chosenPages } = await prompts(pagesInfoQuestion);
    const pagesDB = await fetch({
      url: `${host.builder}/pages/?application_id=${application.id}`,
      method: 'GET',
    });
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const selectedPages =
      chosenPages.findIndex((chosenPage) => chosenPage === 'all') >= 0
        ? pagesInfoQuestion.choices.slice(1).map(({ value }) => value)
        : chosenPages;

    for (const pageInfo of selectedPages) {
      try {
        const pagePath = path.join(appDir, `${pageInfo.path}.json`);
        const pageDB = await saveOrUpdatePage({
          host,
          pagesDB,
          pageInfo,
          application,
          headers,
        });
        const importResult = await fetch({
          url: `${host.builderV2}/page/${pageDB.id}/import`,
          method: 'POST',
          body: fs.readFileSync(pagePath),
          headers,
        });

        console.log(`Imported page: ${pageInfo.name}`);

        if (Array.isArray(importResult.warnings)) {
          importResult.warnings.forEach((warning) =>
            console.warn(` >> warning: ${warning}`),
          );
        }
      } catch (e) {
        console.error(`Error on exporting page: ${pageInfo.name}`);
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
})();
