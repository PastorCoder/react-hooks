import React, { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div className="use-border">
      <h1 className="title">UseRef</h1>
      <h1>Jx</h1>
      <input type="text" placeholder="Enter Text" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefExample;
