import { useEffect, useRef } from "react";

const RefInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  return (
    <label>
      Ref Input
      <input ref={inputRef} id="inputRef" type="text" />
    </label>
  );
};

export default RefInput;
