import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from './contexts/globalContextProvider';
import { routes } from './routes/routes';

function App() {

  return (
    <GlobalContextProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </GlobalContextProvider>
  );
}

export default App;
