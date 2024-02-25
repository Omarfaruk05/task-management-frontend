import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import SingIn from "../pages/SingInPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import TaskPage from "../pages/TaskPage";
import LoginPage from "../pages/LoginPage";
import CreateTaskPage from "../pages/CreateTaskPage";

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
      {
        path: "/task/create",
        element: <CreateTaskPage />,
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
