const fetch = require('./fetch');

const authQuestions = [
  {
    type: 'text',
    name: 'username',
    message: 'Enter UserName',
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter password',
  },
];

async function getAuthToken({ host, username, password }) {
  const authResponse = await fetch({
    url: host.authUrl,
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return authResponse.access_token;
}

module.exports = {
  authQuestions,
  getAuthToken,
};
