import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectHook = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0]);
        console.log("Calling API");
      });
  }, [count]);

  return (
    <div>
      Hey there!
      <div>
        <h1>{data.email}</h1>
      </div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}> click Me </button>
    </div>
  );
};

export default EffectHook;
