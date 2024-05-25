// SearchItem.js

//import React from "react";
import styles from "../allCssStyling/SearchItem.modules.css";
import { MagnifyingGlass } from "phosphor-react";

function SearchItem({ value, label, onChange }) {
  return (
    <div className="search-items-container">
      <MagnifyingGlass size={32} className="search-icon" id="responsive-icon" />
      <input
        value={value}
        label={label}
        placeholder="search items..."
        onChange={(e) => onChange(e.target.value)}
        className="searchItems"
      />
    </div>
  );
}

export default SearchItem