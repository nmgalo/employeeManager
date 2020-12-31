import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./pagination.css";

const PaginationView = ({
  amountOfItems,
  itemsViewLimit,
  onPageSelectCallback,
}) => {
  const paginationIndicatorCount = Math.ceil(amountOfItems / itemsViewLimit);
  const elements = [];

  const [currentPage, setCurrentPage] = useState(1);
  const [isCurrenctPageLast, setIsCurrenctPageLast] = useState(false);

  const selectPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageSelectCallback(pageNumber);
  };

  useState(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    setIsCurrenctPageLast(
      currentPage === paginationIndicatorCount ? true : false
    );
    scrollToTopView();
  }, [currentPage, paginationIndicatorCount]);

  const scrollToTopView = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  elements.push(
    <li key={-1}>
      <button
        disabled={currentPage !== 1 ? false : true}
        onClick={() => selectPage(currentPage - 1)}
      >
        Previous
      </button>
    </li>
  );

  for (let x = 0; x < paginationIndicatorCount; x++) {
    elements.push(
      React.createElement(
        "li",
        {
          key: x,
          className: x + 1 === parseInt(currentPage) ? "active" : "",
        },
        <Link to={`?page=${x + 1}`} onClick={() => selectPage(x + 1)}>
          {x + 1}
        </Link>
      )
    );
    var nextItemIndex = x;
  }

  elements.push(
    <li key={nextItemIndex + 1}>
      <button
        disabled={!isCurrenctPageLast ? false : true}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </li>
  );

  const render = React.createElement("ul", {}, elements);

  return <div id="pagination">{render}</div>;
};

export default PaginationView;
