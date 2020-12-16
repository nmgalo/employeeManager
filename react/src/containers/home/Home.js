import React, { useState, useEffect } from "react";
import "./home.css";
import Person from "../../components/person/Person";
import Spinner from "../../components/spinner/Spinner";
import Modal from "../../components/modal/Modal";

function Home() {
  const [searchName, setSearchName] = useState("");
  const [searchLname, setSearchLname] = useState("");
  const [results, setResults] = useState([]);
  const [pageAmount, setPageAmount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterLname, setFilterLname] = useState("");
  const [filterDob, setFilterDob] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  useEffect(() => {
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
      .then((result) => {
        setResults(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));

    //Code to get amount of pages
    var myHeaders1 = new Headers();
    myHeaders1.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded1 = new URLSearchParams();
    urlencoded1.append("amount_on_page", "10");

    var requestOptions2 = {
      method: "POST",
      headers: myHeaders1,
      body: urlencoded1,
      redirect: "follow",
    };

    fetch("http://localhost:4000/find_pages_amount", requestOptions2)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPageAmount(parseInt(result));
      })
      .catch((error) => console.log("error", error));
  }, [currentPage]);
  //add Currentpage to useeffect update

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
        setLoading(false);
        // console.log("Search results: " + results);
      })
      .catch((error) => console.log("error", error));
  };

  const filterSearch = (fname, lname, dob, gender, region) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("fname", fname);
    urlencoded.append("lname", lname);
    urlencoded.append("dob", dob);
    urlencoded.append("gender", gender);
    urlencoded.append("region", region);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/find_employee_detail", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setResults(result);
        setFiltering(false);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const fromAddress = (address) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("address", address);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/from_address", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setResults(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Modal
        show={filtering}
        modalClosed={() => {
          setFiltering(false);
        }}
        onNameChange={(event) => {
          setFilterName(event.target.value);
        }}
        onLnameChange={(event) => {
          setFilterLname(event.target.value);
        }}
        onDobChange={(event) => {
          setFilterDob(event.target.value);
        }}
        onGenderChange={(event) => {
          setFilterGender(event.target.value);
        }}
        onRegionChange={(event) => {
          setFilterRegion(event.target.value);
        }}
        onButtonClick={() => {
          setResults([]);
          setLoading(true);
          setSearching(true);
          filterSearch(
            filterName,
            filterLname,
            filterDob,
            filterGender,
            filterRegion
          );
        }}
      />
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
              setSearching(true);
              setResults([]);
              setLoading(true);
              sendRequest(searchName, searchLname);
            }}
          >
            Search
          </div>
          <div className="search_button2" onClick={() => setFiltering(true)}>
            Filter
          </div>
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
              <Person
                info={item}
                key={index}
                onAddressClick={() => {
                  setResults([]);
                  setSearching(true);
                  setLoading(true);
                  console.log(item.living_place);
                  fromAddress(item.living_place);
                }}
              />
            ))}
          </table>
          {loading === true ? <Spinner /> : null}
          {searching === false ? (
            <div className="pagination">
              {[...Array(6)]
                .map((e, i) =>
                  currentPage - i > 0 && currentPage - i !== currentPage ? (
                    <button
                      key={i}
                      onClick={() => {
                        setResults([]);
                        setLoading(true);
                        setCurrentPage(currentPage - i);
                      }}
                    >
                      {currentPage - i}
                    </button>
                  ) : null
                )
                .reverse()}
              {[...Array(6)].map((e, i) => (
                <button
                  key={i}
                  className={i === 0 ? "active" : null}
                  onClick={() => {
                    setResults([]);
                    setLoading(true);
                    setCurrentPage(currentPage + i);
                  }}
                >
                  {currentPage + i}
                </button>
              ))}
            </div>
          ) : null}

          {/* I am on page 63 I should be seeing pages 60 to 66 */}
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Home;
