import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import SingIn from "../pages/SingInPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import TaskPage from "../pages/TaskPage";
import LoginPage from "../pages/LoginPage";

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
        path: "/task",
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SingIn />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
