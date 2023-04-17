import { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="use-border">
      <h1 className="title">UseLayoutEffect</h1>
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default UseLayoutEffect;
