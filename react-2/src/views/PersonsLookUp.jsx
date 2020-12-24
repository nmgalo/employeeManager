import SearchFilter from "../components/SearchFilter/SearchFilter";
import SearchResultsView from "../components/SearchResultsView/SearchResultsView";

const PersonsLookUp = () => {
  const onSearchFilterCallback = (searchData) => {
    console.log(searchData);
  };

  return (
    <div>
      <h1>Lookup persons</h1>
      <SearchFilter
        onSearchFilterCallback={(it) => onSearchFilterCallback(it)}
      />
      <SearchResultsView />
    </div>
  );
};

export default PersonsLookUp;
