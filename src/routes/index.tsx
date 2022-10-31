import Admin from '@/pages/Admin';
import Home from '@/pages/Home';
import { createBrowserRouter, redirect } from 'react-router-dom';
import AppShell from '@/components/AppShell';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFound />,
    loader: () => {
      const user = localStorage.getItem('user');

      if (!user) {
        return redirect('/login');
      }
    },
    children: [
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);
