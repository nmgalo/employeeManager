import React from "react";
import "./Person.css";

const Person = (props) => {
  let date = new Date(parseInt(props.info.birth_date));

  return (
    <tr className="person_table_row">
      <td>
        <img
          src={
            props.info.image_code.charAt(0) === "/"
              ? `data:image/png;base64,${props.info.image_code}`
              : `data:image/png;base64,${atob(props.info.image_code)}`
          }
          alt={props.info.lname}
        />
      </td>
      <td>{props.info.first_name} </td>
      <td>{props.info.last_name}</td>
      <td>{props.info.private_number}</td>
      <td>{date.toISOString().slice(0, -14)}</td>
      {/* <td>{props.info.birth_date}</td> */}
      <td>{props.info.gender}</td>
      <td>{props.info.living_place}</td>
    </tr>
  );
};

export default Person;
