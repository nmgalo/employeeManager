import { useEffect, useState } from "react";

import PaginationView from "../PaginationView/PaginationView";

import "./results.css";

export default function SearchResultsView() {
  const [searchResult, setSearchResults] = useState([]);
  const [sumOfResults, setSumOfResults] = useState(null);

  const onPageSelectCallback = (pageNumber) => {
    // TODO implement this function
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/12a923fd-7c84-4e0d-b431-e9badb745cde")
      .then((response) => response.json())
      .then((response) => {
        setSumOfResults(response.resultCount);
        setSearchResults(response.results);
      });
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
        amountOfItems={sumOfResults}
        itemsViewLimit="15"
        onPageSelectCallback={(it) => onPageSelectCallback(it)}
      />
    </div>
  );
}
