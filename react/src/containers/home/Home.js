import React, { useState, useEffect } from "react";
import "./home.css";
import Person from "../../components/person/Person";

function Home() {
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/get_employees", requestOptions)
      .then((response) => response.json())
      .then((result) => setResults(result))
      .catch((error) => console.log("error", error));
  }, []);

  const sendRequest = (fname, lname) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("fname", fname);
    urlencoded.append("lname", lname);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/find_employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
        // console.log("Search results: " + results);
      })
      .catch((error) => console.log("error", error));
  };

  const [searchName, setSearchName] = useState("");
  const [searchLname, setSearchLname] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  return (
    <body>
      <div className="side_container">
        <div className="side_logo_container"></div>
        <div className="side_profile_container">
          <img
            src="http://intermedia.ge/uploads/article_images/small/57461354446771.jpg"
            alt="Mikheil Saakashvili"
          ></img>
          <p>SuperUser</p>
        </div>
      </div>
      <div className="content_container">
        <div className="search_container">
          <div className="search_input_container">
            <input
              type="text"
              placeholder="First Name"
              value={searchName}
              onChange={(event) => {
                setSearchName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={searchLname}
              onChange={(event) => {
                setSearchLname(event.target.value);
              }}
            />
          </div>
          <div
            className="search_button1"
            onClick={() => {
              sendRequest(searchName, searchLname);
            }}
          >
            Search
          </div>
          <div className="search_button2">Filter</div>
        </div>
        <div className="results_container">
          <table className="results_table">
            <tr>
              <th>Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Private Number</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
            {results.map((item, index) => (
              <Person info={item} key={index} />
            ))}
          </table>
        </div>
      </div>
    </body>
  );
}

export default Home;
