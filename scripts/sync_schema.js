const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const util = require('util');
const fetch = require('./fetch');
const { authQuestions, getAuthToken } = require('./auth_questions');
const { hostQuestion } = require('./questions/host');

prompts.override(require('yargs').argv);

const baseDir = path.join(__dirname, '..', 'packages');

function getAllComponents(packageName) {
  const directoryPath = path.join(baseDir, packageName, 'src');
  const components = fs.readdirSync(directoryPath).filter((name) => {
    if (name.endsWith('.ts')) {
      return false;
    }

    try {
      const configFile = fs.readFileSync(
        path.join(directoryPath, name, 'config.json'),
      );

      if (!configFile || JSON.parse(configFile).deprecated) {
        return false;
      }

      if (!fs.existsSync(path.join(directoryPath, name, 'config.json'))) {
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  });
  const chooses = [
    { title: 'All', value: 'all' },
    ...components.map((name) => ({ title: name, value: name })),
  ];

  return chooses;
}

async function syncComponent({ application, component, host, accessToken }) {
  const configBody = fs.readFileSync(
    path.join(baseDir, application, 'src', component, 'config.json'),
  );
  const config = JSON.parse(configBody);

  const syncResponse = await fetch({
    url: `${host.builder}/sync/`,
    method: 'POST',
    body: JSON.stringify(config),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(
    util.inspect(syncResponse, false, null, true /* enable colors */),
  );
}

const questions = [
  {
    type: 'select',
    name: 'application',
    message: 'Select application name',
    choices: [
      { title: 'QCT Common', value: 'components-qct' },
      { title: 'QCT Static', value: 'components-qct-static' },
      { title: 'QCT Builder', value: 'components-qct-builder' },
      { title: 'QCT Form', value: 'components-qct-form' },
      { title: 'QCT Handlers', value: 'components-qct-handlers' },
      { title: 'QCT Stripe', value: 'components-qct-stripe' },
      { title: 'QCT CloudPayments', value: 'components-qct-cloudpayments' },
      { title: 'QCT Router', value: 'components-qct-router' },
      { title: 'QCT Table', value: 'components-qct-table' },
      { title: 'QCT Metamask', value: 'components-qct-metamask' },
      { title: 'QCT Markdown', value: 'components-qct-markdown' },
      { title: 'BCH Common', value: 'components-bch' },
    ],
    initial: 0,
  },
];

const questionComponents = (packageName) => ({
  type: 'autocompleteMultiselect',
  name: 'components',
  message: 'Select component name',
  choices: getAllComponents(packageName),
  hint: '- Space to select. Return to submit',
});

(async () => {
  try {
    const { host } = await prompts(hostQuestion);
    const authInfo = await prompts(authQuestions);
    const accessToken = await getAuthToken({
      host,
      username: authInfo.username,
      password: authInfo.password,
    });

    const response = await prompts(questions);
    const componentsQuestion = questionComponents(response.application);
    const { components: responseComponents } = await prompts(
      componentsQuestion,
    );
    const components =
      responseComponents[0] === 'all'
        ? componentsQuestion.choices.slice(1).map(({ value }) => value)
        : responseComponents;

    for (const component of components) {
      await syncComponent({
        application: response.application,
        component,
        host,
        accessToken,
      });
    }
  } catch (e) {
    console.error(e);
  }
})();
