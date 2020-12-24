import "./filter.css";
import { useState } from "react";

export default function SearchFilter(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitListener = () => {
    props.onSearchFilterCallback({ name, lastName });
  };

  return (
    <div className="filter_container">
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <button name="submit" onClick={() => onSubmitListener()}>
          Search
        </button>
      </div>
    </div>
  );
}
