import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/header";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import "./App.css";

function App() {
  const refreshToken = "vvvvvvvvvv";

  const privateRoutes = refreshToken ? PrivateRoutes : [];
  const publicRoutes = PublicRoutes;

  const routes = [...privateRoutes, ...publicRoutes];

  const router = createBrowserRouter(routes);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
