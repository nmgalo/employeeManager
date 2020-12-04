import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <tr className="person_table_row">
      <td>
        <img src={props.info.image} alt={props.info.lname} />
      </td>
      <td>{props.info.fname} </td>
      <td>{props.info.lname}</td>
      <td>{props.info.pid}</td>
      <td>{props.info.dob}</td>
      <td>{props.info.gender}</td>
      <td>{props.info.pob}</td>
    </tr>
  );
};

export default Person;
