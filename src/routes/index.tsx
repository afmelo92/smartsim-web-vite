import { createBrowserRouter, redirect } from 'react-router-dom';

import Admin from '@/pages/Admin';
import Home from '@/pages/Home';
import AppShell from '@/components/AppShell';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import Clients from '@/pages/Admin/Clients';
import Profile from '@/pages/Profile';
import { getStorageItem } from '@/utils/localStorage';

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
      const token = getStorageItem('token');

      if (!token) {
        return redirect('/login');
      }

      return { token };
    },
    children: [
      {
        path: '/',
        loader: () => redirect('/home'),
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/admin/clients',
        element: <Clients />,
      },
    ],
  },
]);
