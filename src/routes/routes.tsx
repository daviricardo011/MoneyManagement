import React from 'react';
import { LoginScreen } from '../screens/login';
import { RegisterScreen } from '../screens/registerUser';
import { HomeScreen } from '../screens/homePage';
import { RouteObject } from 'react-router-dom';
import { NotFound } from '../screens/notFound';
import { useLocalStorage } from '../hooks/useLocalStorage';


const CheckAuth = ({ privateRoute, children }: { privateRoute?: boolean; children: JSX.Element }) => {
  const [isAuthenticated] = useLocalStorage({ key: 'logged' });

  if (!isAuthenticated && privateRoute) {
    return <LoginScreen />
  }

  return children;
}

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <CheckAuth><LoginScreen /></CheckAuth>,
  },
  {
    path: "/register",
    element: <CheckAuth><RegisterScreen /></CheckAuth>,
  },
  {
    path: "/",
    element: <CheckAuth privateRoute><HomeScreen /></CheckAuth>,
  },
  {
    path: "*",
    element: <CheckAuth privateRoute><NotFound /></CheckAuth>,
  },
];