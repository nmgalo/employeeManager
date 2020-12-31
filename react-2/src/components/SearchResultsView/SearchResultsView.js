import { useEffect, useState } from "react";

import PaginationView from "../PaginationView/PaginationView";

import "./results.css";

export default function SearchResultsView({ searchFieldsData }) {
  const [searchResult, setSearchResults] = useState([]);
  const [sumOfResults, setSumOfResults] = useState(null);
  const [page, setPage] = useState(1);

  console.log(searchFieldsData);

  const onPageSelectCallback = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    let data = {
      first_name: searchFieldsData.name,
      last_name: searchFieldsData.lastName,
      page: page,
      limit: 15,
    };
    var formData = new FormData();
    for (let i in data) {
      formData.append(i, data[i]);
    }

    fetch("http://localhost:4500/find_employee_v2", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        setSumOfResults(response.resultCount);
        setSearchResults(response.results);
      });
  }, [page, searchFieldsData]);

  return (
    <div className="search_results_wrapper">
      <table className="search_results_table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID number</th>
            <th>Address</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((item, index) => (
            <tr key={index}>
              <td rows="2">
                <div>
                  <span>{item.image_code.charAt(0) === "/"}</span>
                  <img
                    src={
                      item.image_code.charAt(0) === "/"
                        ? `data:image/png;base64,${item.image_code}`
                        : `data:image/png;base64,${atob(item.image_code)}`
                    }
                    alt="user"
                  />
                  <span>
                    {item.first_name} {item.last_name}
                  </span>
                </div>
              </td>
              <td rows="1">{item.private_number}</td>
              <td rows="1">{item.living_place}</td>
              <td rows="1">{item.gender === 1 ? "Male" : "Female"}</td>
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
