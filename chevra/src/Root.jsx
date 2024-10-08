// Root.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "./Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
