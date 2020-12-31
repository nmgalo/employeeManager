import { useState } from "react";

import SearchFilter from "../components/SearchFilter/SearchFilter";
import SearchResultsView from "../components/SearchResultsView/SearchResultsView";

const PersonsLookUp = () => {
  const [searchFields, setSearchFields] = useState({});

  const onSearchFilterCallback = (searchData) => {
    setSearchFields(searchData);
  };

  return (
    <div>
      <h1>Lookup persons</h1>
      <SearchFilter
        onSearchFilterCallback={(it) => onSearchFilterCallback(it)}
      />
      <SearchResultsView searchFieldsData={searchFields} />
    </div>
  );
};

export default PersonsLookUp;
