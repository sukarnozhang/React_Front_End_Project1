import React, { useState, useEffect } from "react";
import styles from "../allCssStyling/CurrentDateTime.module.css";


function CurrentDateTime(props) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  let fixedTestingValue = 1111;   //simulate passing a "fixed" value to parent //you can also pass a realtime value though it will require event.target.value not found in this code

  //To display current date to the users
  useEffect(() => {
    setCurrentDateTime(new Date());
  }, []);

  //To parse the date as "numbers" for calculation on expiry date
  useEffect(() => {
    // Call the function passed from the parent with the "fixed" value
    props.sendDataToParent(Date.parse(currentDateTime.toLocaleDateString())); //.toLocalDateString -> returns only date
  }, []);                                                                     //.toLocalString -> returns time & date

  return (
    <div>
      <p className={styles.currentDateTime}>
        {/* Current Date (MM/DD/YYYY): {currentDateTime.toLocaleDateString()} */}

        {/* To display date & time use this code below: */}
        {/* Current Date: {currentDateTime.toLocaleString()} */}
      </p>
    </div>
  );
}

export default CurrentDateTime;
