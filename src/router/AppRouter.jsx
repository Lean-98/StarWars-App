import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HeroesRoutes, childHeroesRoutes } from '../heroes';
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
    element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

