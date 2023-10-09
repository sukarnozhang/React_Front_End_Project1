import React, { useState, useEffect } from "react";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Cleanup
    };
  }, []);

  return (
    <div>
      <p>Current Date: {currentDateTime.toLocaleString()}</p>
    </div>
  );
}

export default CurrentDateTime;
