import React from 'react';
import ReactDOM from 'react-dom/client';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import App from './components/App';
import AppShell from './components/AppShell';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme as DefaultTheme}>
      <App>
        <AppShell />
      </App>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
