import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const incrementFn = () => {
    setCounter(counter + 1);
    console.log("counter", counter);
  };
  const changeFn = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div>
      {counter} <button onClick={incrementFn}> click </button>
      <div>
        <input onChange={changeFn} placeholder="Enter the value..." />
      </div>
      {inputVal}
    </div>
  );
};

export default StateHook;
