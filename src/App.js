import React from "react";
import UseStateExample from "./hooks/useState/UseStateExample";
import UseReducerExample from "./hooks/useReducer/UseReducerExample";
import UseEffectExample from "./hooks/useEffect/UseEffectExample";
import UseRefExample from "./hooks/useRef/UseRefExample";



function App() {
  return (
    <div>
      <UseStateExample />
      <UseReducerExample />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
}

export default App;
