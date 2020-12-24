import React from "react";
import Home from "../home/Home";
import Detailed from "../detailed/Detailed";
import { Route } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import FaceRec from "../faceRec/FaceRec";

const Layout = () => {
  return (
    <>
      <SideMenu />
      <div className="content_container">
        <Route exact path="/" component={Home} />
        <Route path="/detailed" component={Detailed} />
        <Route path="/facerec" component={FaceRec} />
      </div>
    </>
  );
};

export default Layout;
