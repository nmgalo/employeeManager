import React, { useState, useEffect } from "react";
import "./home.css";
import Person from "../../components/person/Person";

function Home() {
  const [searchName, setSearchName] = useState("");
  const [searchLname, setSearchLname] = useState("");
  const [results, setResults] = useState([]);
  const [pageAmount, setPageAmount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(results);
  console.log(pageAmount);
  console.log(currentPage);
  useEffect(() => {
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch("http://localhost:4000/get_employees", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => setResults(result))
    //   .catch((error) => console.log("error", error));
    var myHeaders0 = new Headers();
    myHeaders0.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded0 = new URLSearchParams();
    urlencoded0.append("page", currentPage);

    var requestOptions0 = {
      method: "POST",
      headers: myHeaders0,
      body: urlencoded0,
      redirect: "follow",
    };

    fetch("http://localhost:4000/get_employees_paged", requestOptions0)
      .then((response) => response.json())
      .then((result) => setResults(result))
      .catch((error) => console.log("error", error));

    //Code to get amount of pages
    var myHeaders1 = new Headers();
    myHeaders1.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded1 = new URLSearchParams();
    urlencoded1.append("amount_on_page", "2");

    var requestOptions2 = {
      method: "POST",
      headers: myHeaders1,
      body: urlencoded1,
      redirect: "follow",
    };

    fetch("http://localhost:4000/find_pages_amount", requestOptions2)
      .then((response) => response.json())
      .then((result) => setPageAmount(parseInt(result)))
      .catch((error) => console.log("error", error));
  }, [currentPage]);

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
          <div class="pagination">
            <a href="#">&laquo;</a>
            {[...Array(pageAmount)].map((e, i) => (
              <a
                href="#"
                class={currentPage - 1 == i ? "active" : null}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </a>
            ))}
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
