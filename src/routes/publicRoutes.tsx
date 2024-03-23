// PublicRoutes.tsx
import { Navigate, RouteObject } from "react-router-dom";
import AuthPage from "../pages/auth";

const PublicRoutes: RouteObject[] = [
  {
    path: "login",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];

export default PublicRoutes;
