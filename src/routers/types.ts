import React from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/policy"?: {};
  "/programs"?: {};
  "/reports"?: {};
  "/reports/*"?: {};
  "/programs/*"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  isIndex?: boolean;
  component: React.ReactNode;
}
