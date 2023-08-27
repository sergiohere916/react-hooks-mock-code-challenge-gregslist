import React from "react";
import Search from "./Search";

function Header({searchValue, onSubmitUpdateSearchValue, onSubmitFilterName, onClickAlphabet}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchValue={searchValue} 
      onSubmitUpdateSearchValue={onSubmitUpdateSearchValue}
      onSubmitFilterName={onSubmitFilterName}
      onClickAlphabet={onClickAlphabet}
      />
    </header>
  );
}

export default Header;
