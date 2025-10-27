import Navbar from "@/components/layout/Navbar";
import React from "react";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="md:px-20 px-5">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
