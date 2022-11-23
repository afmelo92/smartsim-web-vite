import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import App from './components/App';
import GlobalStyle from './styles/global';
import { router } from './routes';
import ToastContainer from './components/Toast/Container';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from './hooks/useAuth';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme as DefaultTheme}>
      <UserProvider>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          <App>
            <RouterProvider router={router} />
          </App>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
