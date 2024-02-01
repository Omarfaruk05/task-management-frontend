import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShowDetails from "../pages/ShowDetails";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shows/:id",
        element: <ShowDetails />,
      },
    ],
  },
]);

export default router;
