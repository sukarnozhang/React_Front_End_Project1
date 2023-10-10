import React from "react";
import styles from "../allCssStyling/SearchItem.modules.css";
import { MagnifyingGlass } from "phosphor-react";


function SearchItem({ value, label, onChange }) {
  // const handleChange = (event) => {       //PartA: declare this handler if not using inline version
  //     onChange(event.target.value);
  //     console.log(event);
  //   }

  return (
    <div className="search-items-container">
      {/* PartA Code: <input value={value} onChange={handleChange}/> */}

      {/* Inline version of passing a onChange handler to  */}      
      <input
        value={value}
        label={label}
        placeholder="search items..."
        onChange={(e) => onChange(e.target.value)}
        className="searchItems"
      />

      {/* <img src={searchIcon} alt="Search" className="search-icon" /> */}
      {/* <MagnifyingGlass size={32} className="search-icon" id="responsive-icon"/> */}

    </div>
  );
}

export default SearchItem;
