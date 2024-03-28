import MainPage from "./Main/center";
import SelfProve from "./Login/login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactElement } from "react";
import React from "react";
import ErrorPage from "./error-page";

interface RouteBase {
  path: string;
  element: ReactElement; //리액트 구성요소
  errorElement?: ReactElement;
}

const routes: RouteBase[] = [
  {
    path: "/",
    element: <SelfProve />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },

];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
