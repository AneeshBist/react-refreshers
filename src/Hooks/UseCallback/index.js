import React, { useCallback, useState } from "react";
import Child from "./Child";

const CallbackHook = () => {
  const [data, setData] = useState("this is the data");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default CallbackHook;
