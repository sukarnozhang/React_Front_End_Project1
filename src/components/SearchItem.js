import React from "react";
import styles from "./SearchItem.modules.css";

function SearchItem({ value, label, onChange }) {
  // const handleChange = (event) => {       //PartA: declare this handler if not using inline version
  //     onChange(event.target.value);
  //     console.log(event);
  //   }

  return (
    <div className="itemButto">
      {/* PartA Code: <input value={value} onChange={handleChange}/> */}

      {/* Inline version of passing a onChange handler to  */}
      <input
        value={value}
        label={label}
        placeholder="search items..."
        onChange={(e) => onChange(e.target.value)}
        className="itemButton"
      />
    </div>
  );
}

export default SearchItem;
