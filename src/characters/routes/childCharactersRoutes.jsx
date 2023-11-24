import { Navigate } from "react-router-dom";
import {
  CharacterPage,
  JediPage,
  SithPage,
  SearchPage,
  NotFoundPage,
} from "../pages";

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
    path: "/notfound",
    element: <NotFoundPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/notfound"} />,
  },
];
