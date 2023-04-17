import { useCallback, useState } from "react";
import "../../hooks/style.css";
import Child from "./Child";

export default function UseCallbackExample() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="use-border">
      <p className="title">UseCallback</p>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1 className="new-text"> toggle </h1>}
    </div>
  );
}
