// PublicRoutes.tsx
import { Navigate, RouteObject } from "react-router-dom";
import AuthPage from "../pages/auth";

const PublicRoutes: RouteObject[] = [
  {
    path: "authentication",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/authentication" replace />,
  },
];

export default PublicRoutes;
