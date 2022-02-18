import { useReducer, useState, useRef } from "react";

const Password = () => {
  const [pw, setPw] = useState("");
  const [color, setColor] = useState("basic");
  const onHandleInput = (e) => {
    setPw(e.target.value);
  };
  const inputRef = useRef();
  const clickRef = useRef();
  const validation = (e) => {
    if (pw.length > 4) {
      inputRef.current.focus();
      return;
    }
    if (pw === "0000") {
      setColor("sucess"); //background color: green
    } else {
      setColor("fail"); //background color: red
    }
  };
  return (
    <div className="Password">
      <div>
        <h3>Password Exercise</h3>
        <input
          type="password"
          value={pw}
          onChange={onHandleInput}
          className={color}
          ref={inputRef}
        ></input>
        <button onClick={validation} ref={clickRef}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Password;
