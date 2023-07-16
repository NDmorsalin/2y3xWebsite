import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
