// SearchItem.js

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
      
      
        <MagnifyingGlass size={32} className="search-icon" id="responsive-icon" />      
      {/* Inline version of passing a onChange handler to  */}
      <input
        value={value}
        label={label}
        placeholder="search items..."
        onChange={(e) => onChange(e.target.value)}
        className="searchItems"
      />

      
      {/* <img src={searchIcon} alt="Search" className="search-icon" /> */}

    </div>
  );
}

export default SearchItem;


//Activate below for bootstrap styling

// import styles from "../allCssStyling/SearchItem.modules.css";
// import { MagnifyingGlass } from "phosphor-react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";

// function SearchItem({ value, label, onChange }) {
//   // const handleChange = (event) => {       //PartA: declare this handler if not using inline version
//   //     onChange(event.target.value);
//   //     console.log(event);
//   //   }

//   return (
//     <div className="searchItems2">
//       {/* PartA Code: <input value={value} onChange={handleChange}/> */}

//       {/* Inline version of passing a onChange handler to  */}

//       <ButtonToolbar>
//         <InputGroup>
//           <InputGroup.Text id="btnGroupAddon">
//             <MagnifyingGlass
//               size={15}
//               className="search-icon"
//               id="responsive-icon"
//             />
//           </InputGroup.Text>
          
//           <Form.Control         
//             type="text"
//             aria-describedby="btnGroupAddon"
//             value={value}
//             label={label}
//             placeholder="search items..."
//             onChange={(e) => onChange(e.target.value)}            
//           />
           
//         </InputGroup>
//       </ButtonToolbar>
//       {/* <img src={searchIcon} alt="Search" className="search-icon" /> */}
//       {/* <MagnifyingGlass size={32} className="search-icon" id="responsive-icon"/> */}
//     </div>
//   );
// }

// export default SearchItem;
