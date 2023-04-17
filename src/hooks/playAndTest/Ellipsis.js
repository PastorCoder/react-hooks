import React from "react";
import "./EllisisStyles.css";

function TextTooltip() {
  return (
    <div className="text-container">
      <p title="This is the full text that will be displayed on hover">
        This is a truncated text...
      </p>
    </div>
  );
}
export default TextTooltip;
