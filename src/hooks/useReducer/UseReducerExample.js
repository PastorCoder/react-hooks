import React, { useReducer } from "react";
import "../../hooks/style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
          return { count: state.count, showText: !state.showText };
      case "randomText":
          return { count: state.count, showText: state.showText}
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="use-border">
      <p className="title">UseReducer</p>
      <h1 style={{ color: "green" }}>{state.count}</h1>
      <button
        className="button"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
          dispatch({ type: "randomText" });
        }}
      >
        Click Here
      </button>

      {state.showText && (
        <p>
          This is a text controlled by{" "}
          <code style={{ color: "green" }}>useReducer</code>
          <h6>
            This hook is similar to{" "}
            <code style={{ color: "green" }}>useState</code>
          </h6>
        </p>
      )}
    </div>
  );
};

export default ReducerTutorial;
