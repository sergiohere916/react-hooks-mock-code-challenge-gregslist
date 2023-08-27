import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({allListings, onClickDeleteListing}) {
  const listingCards = allListings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onClickDeleteListing={onClickDeleteListing}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
