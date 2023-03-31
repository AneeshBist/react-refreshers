import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);

  const clickFn = () => {
    inputRef.current.focus();
    console.log("value: ", inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="here..." ref={inputRef} />
      <button onClick={clickFn}>Change it</button>
    </div>
  );
};

export default RefHook;
