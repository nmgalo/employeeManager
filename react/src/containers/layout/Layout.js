import React from "react";
import Home from "../home/Home";
import Detailed from "../detailed/Detailed";
import { Route } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import TopBar from "../../components/topBar/TopBar";

const Layout = () => {
  return (
    <>
      <SideMenu />
      <div className="content_container">
        <Route exact path="/" component={Home} />
        <Route path="/detailed" component={Detailed} />
      </div>
    </>
  );
};

export default Layout;
