import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [allListings, setAllListings] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setAllListings([...listings]))
  }, [])

  function onClickDeleteListing(id) {
    const updatedListing = allListings.filter((listing) => {
      return (listing.id !== id);
    })
    setAllListings([...updatedListing]);
  }

  function onSubmitUpdateSearchValue(value) {
    setSearchValue(value);
  }

  function onSubmitFilterName(value) {
    const filterListing = allListings.filter((listing) => {
      return (listing.description.toLowerCase() === value.toLowerCase())
    })
    setAllListings([...filterListing]);
  }
  
  function onClickAlphabet() {
    const allListingsHolder = [...allListings];
    allListingsHolder.sort((a, b) => {
      const nameA = a.location.toUpperCase(); 
      const nameB = b.location.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setAllListings([...allListingsHolder]);
  }

  return (
    <div className="app">
      <Header searchValue={searchValue} 
      onSubmitUpdateSearchValue={onSubmitUpdateSearchValue} 
      onSubmitFilterName={onSubmitFilterName}
      onClickAlphabet={onClickAlphabet}
      />
      <ListingsContainer allListings={allListings} onClickDeleteListing={onClickDeleteListing} />
    </div>
  );
}

export default App;
