import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AuthPage from "../components/pages/AuthPage";
import UserPage from "../components/pages/UserPage";
import ErrorPage from "../components/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
]);
