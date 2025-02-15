import React, { useState } from "react";
import "../styles/ThreeWaySwitch.css";

const ThreeWaySwitch = () => {
  const [gender, setGender] = useState("male");

  const handleSwitch = (value) => {
    setGender(value);
  };

  return (
    <div className="switch-container">
      <div className="labels">
        <span className={gender === "male" ? "active" : ""}>Male</span>
        <span className={gender === "female" ? "active" : ""}>Female</span>
        <span className={gender === "other" ? "active" : ""}>Other</span>
      </div>
      <div className="switch">
        <div
          className={`switch-dot ${gender}`}
          onClick={() => {
            if (gender === "male") handleSwitch("female");
            else if (gender === "female") handleSwitch("other");
            else handleSwitch("male");
          }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeWaySwitch;
