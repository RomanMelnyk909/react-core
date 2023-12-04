import { useRef } from "react";
import { useParams } from "react-router-dom";

const RefInput = () => {
  const inputRef = useRef(null);

  const params = useParams();
  console.log(params);

  return (
    <label>
      Ref Input
      <input ref={inputRef} id="inputRef" type="text" />
    </label>
  );
};

export default RefInput;
