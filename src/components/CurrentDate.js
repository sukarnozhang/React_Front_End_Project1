import React, { useState, useEffect } from "react";

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Cleanup
    };
  }, []);

  return (
    <div>
      <p>Current Date: {currentDate.toLocaleString()}</p>
    </div>
  );
}

export default CurrentDate;
