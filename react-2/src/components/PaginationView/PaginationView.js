import React from "react";

const PaginationView = ({
  amountOfItems,
  currentPage,
  amountItemsLimitOnView,
}) => {
  const paginationIndicatorCount = amountOfItems / amountItemsLimitOnView;

  const elements = [];

  for (let x = 0; x < paginationIndicatorCount; x++) {
    elements.push(
      React.createElement(
        "li",
        {
          className: x === currentPage ? "active" : "",
        },
        x + 1
      )
    );
  }

  const render = React.createElement("ul", {}, elements);

  return render;
};

export default PaginationView;
