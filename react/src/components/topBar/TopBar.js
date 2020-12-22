import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./TopBar.css";

const TopBar = (props) => {
  return (
    <div className="search_container">
      {props.searching === true ? (
        <>
          <div className="search_input_container">
            <Input
              PlaceHolder="First Name"
              Value={props.NameValue}
              OnChange={props.OnNameChange}
            />
            <Input
              PlaceHolder="Last name"
              Value={props.LnameValue}
              OnChange={props.OnLnameChange}
            />
            <Button
              ClassName="search_button1"
              OnClick={props.OnSearchClick}
              title="Search"
            />
          </div>

          {props.notFiltering === false ? (
            <Button
              ClassName="search_button2"
              OnClick={props.OnFilterClick}
              title="Filter"
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default TopBar;
