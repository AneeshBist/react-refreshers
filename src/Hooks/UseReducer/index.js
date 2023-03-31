import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE_SHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const clickFn = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLE_SHOWTEXT" });
  };

  return (
    <div>
      <h1>{state.count} </h1>
      <button onClick={clickFn}> click Me </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerHook;
