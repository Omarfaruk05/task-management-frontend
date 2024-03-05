import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import { NotFoundPage } from "../pages/NotFoundPage";
import TaskPage from "../pages/TaskPage";
import LoginPage from "../pages/LoginPage";
import CreateTaskPage from "../pages/CreateTaskPage";
import UpdateTaskPage from "../pages/UpdateTaskPage";
import Auth from "../components/Auth";
import SingUpPage from "../pages/SingUpPage";
import MyProfilePage from "../pages/MyProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <App />
      </Auth>
    ),
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
      {
        path: "/task/:id",
        element: <UpdateTaskPage />,
      },
      {
        path: "/my-profile",
        element: <MyProfilePage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SingUpPage />,
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
