import React from 'react';
import { LoginScreen } from '../screens/login';
import { HomeScreen } from '../screens/homePage';
import { RouteObject } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import { NotFound } from '../screens/notFound';


const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return <LoginScreen />
  }

  return children;
}
const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { userData } = useContext(AuthContext);

  if (userData) {
    return <HomeScreen />
  }

  return children;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PublicRoute><LoginScreen /></PublicRoute>,
  },
  {
    path: "/",
    element: <RequireAuth><HomeScreen /></RequireAuth>,
  },
  {
    path: "*",
    element: <RequireAuth><NotFound /></RequireAuth>,
  },
];