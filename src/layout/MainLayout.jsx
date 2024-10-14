import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="main">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
