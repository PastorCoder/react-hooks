import React, { useEffect, useState } from "react";
import "../../hooks/style.css";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API GET REQUEST WAS MADE");
      });
  }, []);

  return (
    <div className="use-border">
      <p className="title">UseEffect</p>

      <p>
        Hello <span className="email">{data}</span>
      </p>

      <h1 className="email">{count}</h1>
      <button
        style={{ color: "rgb(39, 48, 222)" }}
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
