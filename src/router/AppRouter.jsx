import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HeroesRoutes, childHeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesRoutes />,
    errorElement: <ErrorPage />,
    children: childHeroesRoutes,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

