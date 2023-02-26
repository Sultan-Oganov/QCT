/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'CONF_');

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    server: {
      proxy: {
        '/api/v1/builder': {
          target:
            env.CONF_BUILDER_HOST || 'http://dev.api.qa.qctoken.online:8002',
          rewrite: (path) => path.replace('builder', ''),
        },
        '/api/v1/auth': {
          target: env.CONF_AUTH_HOST || 'http://dev.api.qa.qctoken.online:8001',
          rewrite: (path) => path.replace('auth', ''),
        },
        '/api/v1/lms': {
          target: env.CONF_LMS_HOST || 'http://dev.api.qa.qctoken.online:8003',
          rewrite: (path) => path.replace('lms', ''),
        },
        '/api/v1/payments': {
          target:
            env.CONF_PAYMENT_HOST || 'http://dev.api.qa.qctoken.online:8004',
          rewrite: (path) => path.replace('payments', ''),
        },
      },
    },
  };
});
