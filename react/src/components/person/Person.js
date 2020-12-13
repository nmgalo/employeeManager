import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <tr className="person_table_row">
      <td>
        <img
          src={
            props.info.image_code.charAt(0) == "/"
              ? `data:image/png;base64,${props.info.image_code}`
              : `data:image/png;base64,${atob(props.info.image_code)}`
          }
          alt={props.info.lname}
        />
      </td>
      <td>{props.info.first_name} </td>
      <td>{props.info.last_name}</td>
      <td>{props.info.private_number}</td>
      <td>{props.info.birth_date}</td>
      <td>{props.info.gender}</td>
      <td>{props.info.region}</td>
    </tr>
  );
};

export default Person;
