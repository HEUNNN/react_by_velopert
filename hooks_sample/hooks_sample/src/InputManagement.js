import { useState } from "react";
const InputManagement = () => {
  const [state, setState] = useState({ userName: "", nickName: "" });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <br />
      <br />
      <h3>Input management</h3>
      <input name={"userName"} value={state.userName} onChange={handleInput} />
      <input name={"nickName"} value={state.nickName} onChange={handleInput} />
      <h4>사용자 이름: {state.userName}</h4>
      <h4>사용자 닉네임: {state.nickName}</h4>
    </div>
  );
};
export default InputManagement;
