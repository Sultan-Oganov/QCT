const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const fetch = require('./fetch');
const { getApplicationsQuestion } = require('./questions/builder');
const { loadPagesInfo, savePagesInfo } = require('./utils/page');
const { folderQuestion } = require('./questions/folder');
const { hostQuestion } = require('./questions/host');

prompts.override(require('yargs').argv);

async function getPagesQuestion(host, applicationId) {
  const pages = await fetch({
    url: `${host.builder}/pages/?application_id=${applicationId}`,
    method: 'GET',
  });

  return {
    type: 'autocomplete',
    name: 'page',
    message: 'Choose page to export:',
    choices: [
      { title: 'All', value: 'all' },
      ...pages.map((page) => ({ title: page.name, value: page })),
    ],
    initial: 0,
  };
}

function getAppDir(folderPath, application) {
  const appDir = path.join(folderPath, application.path);

  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }

  return appDir;
}

(async () => {
  try {
    const { host } = await prompts(hostQuestion);
    const { application } = await prompts(await getApplicationsQuestion(host));
    const pagesQuestion = await getPagesQuestion(host, application.id);
    const { page: selectedPage } = await prompts(pagesQuestion);
    const { folderPath } = await prompts(folderQuestion);

    const pages =
      selectedPage === 'all'
        ? pagesQuestion.choices.slice(1).map(({ value }) => value)
        : [selectedPage];
    const appDir = getAppDir(folderPath, application);
    const pagesInfo = loadPagesInfo(appDir);

    await Promise.all(
      pages.map(async (page) => {
        try {
          const pageSchema = await fetch({
            url: `${host.builderV2}/page/${page.id}/export/`,
            method: 'GET',
          });
          const pageIndex = pagesInfo.findIndex(
            ({ guid }) => page.guid === guid,
          );
          const pageInfo = {
            name: page.name,
            description: page.description,
            path: page.path,
            guid: page.guid,
          };

          if (pageIndex === -1) {
            pagesInfo.push(pageInfo);
          } else {
            pagesInfo[pageIndex] = pageInfo;
          }

          const pagePath = path.join(
            folderPath,
            application.path,
            `${page.path}.json`,
          );

          fs.writeFileSync(pagePath, pageSchema.content);

          console.log(`Saved page: ${page.name}`);
        } catch (e) {
          console.error(`Error on exporting page: ${page.name}`);
          console.error(e);
        }
      }),
    );

    pagesInfo.sort((a, b) => a.name.localeCompare(b.name));

    savePagesInfo(appDir, pagesInfo);
  } catch (e) {
    console.error(e);
  }
})();
