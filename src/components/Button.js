import React from "react";
import styles from "../allCssStyling/Button.module.css";

function Button({ onClick, label }) {
  
  // new code
  const handleClick = () => {
    
   

    // Perform the second action
    console.log('Action 2 executed');
  };

  return (
    <>
      <button className={styles.itemButton} onClick={onClick}>
        {label}
      </button>
    </>
  );
}

export default Button;

// Activate below for bootstrap styling

// import React from "react";
// import styles from "../allCssStyling/Button.module.css";

// import Button from "react-bootstrap/Button";
// Importing the Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// function Button2({ onClick, label }) {
//   return (
//     <>
//       <Button onClick={onClick} variant="outline-primary">
//         {" "}
//         {label}{" "}
//       </Button>{" "}
//     </>
//   );
// }

// export default Button2;
