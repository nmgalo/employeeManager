import React from "react";
import "./SideMenu.css";

const SideMenu = (props) => {
  return (
    <>
      <div className="side_container">
        <div className="side_logo_container"></div>
        <div className="side_profile_container">
          <img
            src="http://intermedia.ge/uploads/article_images/small/57461354446771.jpg"
            alt="Mikheil Saakashvili"
          ></img>
          <p>SuperUser</p>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
