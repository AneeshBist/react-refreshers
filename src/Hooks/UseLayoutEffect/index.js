import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="ADAM" />
    </div>
  );
};

export default LayoutEffectHook;
