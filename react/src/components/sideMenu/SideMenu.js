import React from "react";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";

const SideMenu = (props) => {
  return (
    <>
      <div className="side_container">
        <div className="side_logo_container"></div>
        {/* <div className="side_navigation_link">
          <h2>Home</h2>
        </div> */}
        <ul className="side_navigation">
          <li>
            <div className="side_navigation_link_image"></div>
            <NavLink
              exact
              to="/"
              style={{ color: "ivory" }}
              activeStyle={{ color: "red" }}
            >
              <div className="side_navigation_link">Home</div>
            </NavLink>
          </li>
          <li>
            <div className="side_navigation_link_image"></div>
            <NavLink
              to="/detailed"
              style={{ color: "ivory" }}
              activeStyle={{ color: "red" }}
            >
              <div className="side_navigation_link">Detail</div>
            </NavLink>
          </li>
        </ul>

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
