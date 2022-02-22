import { useState } from "react";

const IterationSampleTwo = () => {
  const [state, setState] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [input, setInput] = useState("");
  const onHandelInput = (e) => {
    setInput(e.target.value);
  };
  const [nextId, setId] = useState(5);
  const onSubmit = (e) => {
    setState([...state, { id: nextId, text: input }]);
    setId(nextId + 1);
    setInput("");
  };

  const onRemove = (targetId) => {
    let removedArr = state.filter((elem) => elem.id !== targetId);
    setState(removedArr);
  };
  const arr = state.map((v) => (
    <li key={v.id} onDoubleClick={() => onRemove(v.id)}>
      {v.text}
    </li>
  ));

  return (
    <div className="IterationSampleTwo">
      <div>
        <input value={input} name="input" onChange={onHandelInput}></input>
        <button onClick={onSubmit}>저장</button>
      </div>
      <ul>{arr}</ul>
    </div>
  );
};

export default IterationSampleTwo;
