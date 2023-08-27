import React from "react";

function Search({searchValue, onSubmitUpdateSearchValue, onSubmitFilterName, onClickAlphabet}) {

  function handleSearchChange(e) {
    onSubmitUpdateSearchValue(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    onSubmitFilterName(searchValue);
  }

  function handleDisplayClick() {
    onClickAlphabet();
  }

  return (
   <>
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
    <button onClick={handleDisplayClick}>Display by Location</button>   
   </>
  );
}

export default Search;
