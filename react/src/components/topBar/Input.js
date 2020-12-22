import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.PlaceHolder}
      value={props.Value}
      onChange={props.OnChange}
    />
  );
};

export default Input;
