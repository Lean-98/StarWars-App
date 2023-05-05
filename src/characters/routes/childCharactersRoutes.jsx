import { Navigate } from 'react-router-dom';
import { CharacterPage, JediPage, SithPage, SearchPage } from '../pages';

export const childCharactersRoutes = [
  {
    path: "/jedi",
    element: <JediPage />,
  },
  {
    path: "/sith",
    element: <SithPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
];
