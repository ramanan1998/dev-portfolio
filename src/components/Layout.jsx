import { useLocation, useOutlet } from "react-router-dom";
// import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import Transition from "./Transition";
import React from "react";
import { AnimatePresence } from "framer-motion";

const Layout = () => {

  const { pathname } = useLocation();
  const element = useOutlet();

  return <div className="page bg-site bg-cover bg-no-repeat font-sora relative text-white">
    <Transition/>
    <TopLeftImg/>
    <Nav/>
    {/* <Header/> */}
    <AnimatePresence mode="wait">
      {element && React.cloneElement(element, { key: pathname })}
    </AnimatePresence>
  </div>;
};

export default Layout;
