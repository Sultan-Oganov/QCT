const hostQuestion = {
  type: 'autocomplete',
  name: 'host',
  message: 'Choose host to import:',
  choices: [
    {
      title: 'dev.qa.qctoken.online',
      value: {
        builder: 'http://dev.qa.qctoken.online/api/v1/builder',
        builderV2: 'http://dev.api.qa.qctoken.online:8002/api/v2',
        authUrl: 'http://dev.qa.qctoken.online/api/v1/auth/auth/signin',
      },
    },
    {
      title: 'qctoken.io',
      value: {
        builder: 'https://qctoken.io/api/v1/builder',
        builderV2: 'https://qctoken.io/api/v2/builder',
        authUrl: 'https://qctoken.io/api/v1/auth/auth/signin',
      },
    },
    {
      title: 'localhost:8002',
      value: {
        builder: 'http://localhost:8002/api/v1',
        builderV2: 'http://localhost:8002/api/v2',
        authUrl: 'http://localhost:8001/api/v1/auth/signin',
      },
    },
  ],
  initial: 0,
};

module.exports = {
  hostQuestion,
};
