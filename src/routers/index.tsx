import Page404 from "@/pages/Page404/Page404";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Page } from "./types";

export const pages: Page[] = [
  { path: "/", component: <div>Home</div> },
  { path: "/policy", component: <div>Policy</div> },
  { path: "/programs", component: <div>Programs</div> },
  { path: "/programs/*", component: <div>Program Details</div> },
  { path: "/reports", component: <div>Reports</div> },
  { path: "/reports/*", component: <div>Report Detail</div> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {pages.map(({ component, path }, index) => {
        return <Route key={index} element={component} path={path} />;
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
