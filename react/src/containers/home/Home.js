import React, { useState, useEffect } from "react";
import "./home.css";
import Person from "../../components/person/Person";
import Spinner from "../../components/spinner/Spinner";
import Modal from "../../components/modal/Modal";
import { PostData } from "../../services/PostData";
import TopBar from "../../components/topBar/TopBar";

function Home() {
  const [searchName, setSearchName] = useState("");
  const [searchLname, setSearchLname] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [filterSearching, setFilterSearching] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterLname, setFilterLname] = useState("");
  const [filterDob, setFilterDob] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  var groupOfFilters = [
    filterName,
    filterLname,
    filterDob,
    filterGender,
    filterRegion,
  ];

  useEffect(() => {
    if (filterSearching) {
      filterSearch(
        filterName,
        filterLname,
        filterDob,
        filterGender,
        filterRegion
      );
    }
  }, [filterSearching]);

  useEffect(() => {
    var getEmployeesParams = new URLSearchParams();
    getEmployeesParams.append("page", currentPage);
    PostData("get_employees_paged", getEmployeesParams)
      .then((result) => {
        setResults(result);
        setLoading(false);
        setFilterSearching(false);
      })
      .catch(() => {
        setResults([]);
        setLoading(false);
        setFilterSearching(false);
      });
  }, [currentPage]);

  const sendRequest = (fname, lname) => {
    var findParams = new URLSearchParams();
    findParams.append("fname", fname);
    findParams.append("lname", lname);
    PostData("find_employee", findParams).then((result) => {
      setResults(result);
      setLoading(false);
    });
  };

  const filterSearch = (name, lname, dob, gender, region) => {
    var filterParams = new URLSearchParams();
    filterParams.append("fname", name);
    filterParams.append("lname", lname);
    filterParams.append("dob", dob);
    filterParams.append("gender", gender);
    filterParams.append("region", region);
    PostData("find_employee_detail", filterParams).then((result) => {
      setResults(result);
      setSearching(true);
      setFilterSearching(false);
      setLoading(false);
    });
  };

  const fromAddress = (address) => {
    var addressParams = new URLSearchParams();
    addressParams.append("address", address);
    PostData("from_address", addressParams).then((result) => {
      setLoading(false);
      setResults(result);
    });
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
        values={groupOfFilters}
        onButtonClick={() => {
          setResults([]);
          setLoading(true);
          setFilterSearching(true);
        }}
      />
      <TopBar
        searching={true}
        NameValue={searchName}
        OnNameChange={(event) => {
          setSearchName(event.target.value);
        }}
        LnameValue={searchLname}
        OnLnameChange={(event) => {
          setSearchLname(event.target.value);
        }}
        OnSearchClick={() => {
          setSearching(true);
          setResults([]);
          setLoading(true);
          sendRequest(searchName, searchLname);
        }}
        OnFilterClick={() => {
          setFiltering(true);
        }}
      />

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
          <tbody>
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
          </tbody>
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
            {[...Array(6)].map((_e, i) => (
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
      </div>
    </div>
  );
}

export default Home;
