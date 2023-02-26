import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, theme } from '@qctoken/theme';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { CssCommon } from './components/CssCommon';

// Modules
import '@qctoken/components-qct';
import '@qctoken/components-qct-static';
import '@qctoken/components-qct-form';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssCommon />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
