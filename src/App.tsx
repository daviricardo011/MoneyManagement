import React from 'react';
import { LoginScreen } from './screens/login';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/colors';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from './screens/homePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/",
    errorElement: <HomeScreen />,
    element: <HomeScreen />,
  },
]);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
