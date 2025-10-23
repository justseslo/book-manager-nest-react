import Navbar from "@/components/layout/Navbar";
import React from "react";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="px-20">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
