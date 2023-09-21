import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Wrapper;
