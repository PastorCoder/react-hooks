import React from "react";
import UseStateExample from "./hooks/useState/UseStateExample";
import UseReducerExample from "./hooks/useReducer/UseReducerExample";
import UseEffectExample from "./hooks/useEffect/UseEffectExample";
import UseRefExample from "./hooks/useRef/UseRefExample";
import UseLayoutEffect from "./hooks/useLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./hooks/useImperativeHandle/UseImperativeHandle";
import UseContextExampme from "./hooks/useContext/UseContextExample";
import UseMemoExample from "./hooks/useMemo/UseMemoExample";
import UseCallbackExample from "./hooks/useCallback/UseCallbackExample";
// import Ellipsis from "./hooks/playAndTest/Ellipsis";



function App() {
  return (
    <div>
      <UseStateExample />
      <UseReducerExample />
      <UseEffectExample />
      <UseRefExample />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContextExampme />
      <UseMemoExample />
      <UseCallbackExample />
      {/**<Ellipsis /> */}
    </div>
  );
}

export default App;
