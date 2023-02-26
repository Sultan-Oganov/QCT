const http = require('http');
const https = require('https');
const URL = require('url');

module.exports = function (opts) {
  return new Promise(function (resolve, reject) {
    const url = URL.parse(opts.url);
    const isHttps = url.protocol === 'https:';
    const request = isHttps ? https.request : http.request;

    const options = {
      hostname: url.hostname,
      port: isHttps ? 443 : url.port,
      path: url.path,
      method: opts.method,
      headers: opts.headers,
    };

    if (opts.body) {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        'Content-Length': opts.body.length,
      };
    }

    const req = request(options, (res) => {
      let chunks = '';

      res.on('data', (d) => {
        chunks += d;
      });

      res.on('end', () => {
        const isJson = res.headers['content-type'] === 'application/json';

        if (res.statusCode >= 300 && isJson) {
          reject(JSON.parse(chunks));
        } else if (isJson) {
          resolve(JSON.parse(chunks));
        } else if (res.statusCode >= 300) {
          reject({ content: chunks, statusCode: res.statusCode });
        } else {
          resolve({ content: chunks });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (opts.body) {
      req.write(opts.body);
    }

    req.end();
  });
};
