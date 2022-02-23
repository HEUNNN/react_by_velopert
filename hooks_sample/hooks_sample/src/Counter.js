import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const onPlus = () => {
    setValue(value + 1);
  };
  const onMinus = () => {
    setValue(value - 1);
  };
  return (
    <div className="counter">
      <p>
        현재 카운터 값: <b>{value}</b>
      </p>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
};
export default Counter;
