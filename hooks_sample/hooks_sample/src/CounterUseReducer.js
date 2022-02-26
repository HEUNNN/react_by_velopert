import { useReducer, useState } from "react";
const myReducer = (state, action) => {
  switch (action.type) {
    case "PLUS1":
      return { value: state.value + 1 };
    case "PLUS10":
      return { value: state.value + 10 };
    case "PLUS100":
      return { value: state.value + 100 };
    case "PLUS1000":
      return { value: state.value + 1000 };
  }
};
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(myReducer, { value: 0 });

  return (
    <div>
      <h2>{state.value}</h2>
      <button onClick={() => dispatch({ type: "PLUS1" })}>+1</button>
      <button onClick={() => dispatch({ type: "PLUS10" })}>+10</button>
      <button onClick={() => dispatch({ type: "PLUS100" })}>+100</button>
      <button onClick={() => dispatch({ type: "PLUS1000" })}>+1000</button>
    </div>
  );
};

export default CounterUseReducer;
