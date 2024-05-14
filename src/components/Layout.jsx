import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";

const Layout = () => {
  return <div className="page bg-site bg-cover bg-no-repeat font-sora relative text-white">
    <TopLeftImg/>
    <Nav/>
    <Header/>
    <Outlet/>
  </div>;
};

export default Layout;
