const fetch = require('../fetch');

async function getApplicationsQuestion(host) {
  const applications = await fetch({
    url: `${host.builder}/applications/`,
    method: 'GET',
  });

  return {
    type: 'autocomplete',
    name: 'application',
    message: 'Choose application to export:',
    choices: applications.map((app) => ({ title: app.name, value: app })),
    initial: 0,
  };
}

module.exports = {
  getApplicationsQuestion,
};
