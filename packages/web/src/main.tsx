import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, theme } from '@qctoken/theme';
import { App } from './App';
import './index.css';

// Modules
import '@qctoken/components-qct';
import '@qctoken/components-qct-static';
import '@qctoken/components-qct-builder';
import '@qctoken/components-qct-form';
import '@qctoken/components-qct-handlers';
import '@qctoken/components-qct-router';
import '@qctoken/components-bch';
import '@qctoken/components-qct-stripe';
import '@qctoken/components-qct-cloudpayments';
import '@qctoken/components-qct-table';
import '@qctoken/components-qct-markdown';
import '@qctoken/components-qct-metamask';
import '@qctoken/components-qct-survey';
import '@qctoken/components-qct-vr';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
