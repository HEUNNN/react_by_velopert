import { useEffect, useRef, useState } from "react";

const RefSample = () => {
  const [number, setNumber] = useState(0);
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  setId(3);
  printId();
  setId(4);
  printId();
  useEffect(() => {
    console.log("렌더링");
  });
  return (
    <div>
      <h5>{number}</h5>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </div>
  );
};
export default RefSample;
