import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, CharactersRoutes, childCharactersRoutes } from '../characters';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute> <LoginPage /> </PublicRoute> ,
  },
  {
    path: "/",
    element: <PrivateRoute> <CharactersRoutes /> </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: childCharactersRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

