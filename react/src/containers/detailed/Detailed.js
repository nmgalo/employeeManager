import React from "react";
import "./Detailed.css";
import TopBar from "../../components/topBar/TopBar";

const Detailed = (props) => {
  return (
    <>
      <TopBar />
      <div className="detailed_container">
        <h1>Hello, it's me</h1>
      </div>
    </>
  );
};

export default Detailed;
