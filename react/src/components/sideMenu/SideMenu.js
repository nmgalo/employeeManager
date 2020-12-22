import React from "react";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";

const SideMenu = (props) => {
  return (
    <>
      <div className="side_container">
        <ul className="side_navigation">
          <li>
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
            <NavLink
              to="/detailed"
              style={{ color: "ivory" }}
              activeStyle={{ color: "red" }}
            >
              <div className="side_navigation_link">Detail</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
