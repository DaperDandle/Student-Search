import React from "react";
import Plus from "../assets/images/plus.png";
import Minus from "../assets/images/minus.png";

const ExpandButton = ({ expanded, setExpanded }) => {
  return (
    <div className="grades-btn-container">
      <button className="grades-btn" onClick={() => setExpanded(!expanded)}>
        {/* set image source based on whether info is expanded */}
        <img
          src={expanded ? Minus : Plus}
          alt="Expand Button"
          className="grades-btn-img"
        />
      </button>
    </div>
  );
};

export default ExpandButton;
