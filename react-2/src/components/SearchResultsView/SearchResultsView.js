import { useEffect, useState } from "react";

import PaginationView from "../PaginationView/PaginationView";

import "./results.css";

export default function SearchResultsView() {
  const [searchResult, setSearchResults] = useState([]);
  const [sumOfResults, setSumOfResults] = useState(null);

  useEffect(() => {
    setSumOfResults(12);
    setSearchResults([
      {
        id: 1,
        name: "Nick",
        lastName: "Mgaloblishvili",
        personalNumber: "321931",
        dateOfBirth: "02.08.2001",
        gender: "Male",
        faceImage:
          "https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-17/@@images/image/large",
      },
      {
        id: 2,
        name: "აბდულ ჯაბარი ნავაროტკებით",
        lastName: "გოდოს შვილით",
        personalNumber: "321389712",
        dateOfBirth: "12.12.1999",
        gender: "Female",
        faceImage:
          "https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-17/@@images/image/large",
      },
    ]);
  }, []);

  return (
    <div className="search_results_wrapper">
      <table className="search_results_table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID number</th>
            <th>Date Of birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((item, index) => (
            <tr key={index}>
              <td rows="2">
                <div>
                  <img src={item.faceImage} alt="user" />
                  <span>
                    {item.name} {item.lastName}
                  </span>
                </div>
              </td>
              <td rows="1">{item.personalNumber}</td>
              <td rows="1">{item.dateOfBirth}</td>
              <td rows="1">{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationView
        amountOfItems="12"
        currentPage="1"
        amountItemsLimitOnView="6"
      />
    </div>
  );
}
