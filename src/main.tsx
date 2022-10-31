import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import App from './components/App';
import GlobalStyle from './styles/global';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme as DefaultTheme}>
      <App>
        <RouterProvider router={router} />
      </App>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
