import { useReducer } from "react";
const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};
const InputUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { userName: "", nickName: "" });
  return (
    <div>
      <input
        name="userName"
        value={state.userName}
        onChange={(e) => dispatch(e.target)}
      ></input>
      <input
        name="nickName"
        value={state.nickName}
        onChange={(e) => dispatch(e.target)}
      ></input>
      <div>
        <h3>사용자 이름: {state.userName}</h3>
        <h3>사용자 닉네임: {state.nickName}</h3>
      </div>
    </div>
  );
};
export default InputUseReducer;
