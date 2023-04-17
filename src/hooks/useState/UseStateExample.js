import React, { useState } from "react";
import "../../hooks/style.css";

const useStateExample = () => {
  const [inputValue, setInputValue] = useState("Jx");

  let anyChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="use-border">
      <p className="title">UseState</p>
      <input  placeholder="enter text..." onChange={anyChange} />
      <br />
      <span className="new-text">{inputValue}</span>
    </div>
  );
};

export default useStateExample;
