import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import HomePageLayout from "./components/layout/HomePageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePageLayout />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
