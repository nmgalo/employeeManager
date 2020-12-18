import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <div
        className={props.ClassName}
        onClick={props.OnClick}

        // {() => {
        //     setSearching(true);
        //     setResults([]);
        //     setLoading(true);
        //     sendRequest(searchName, searchLname);
        //   }}
      >
        {props.title}
      </div>
    </>
  );
};

export default Button;
