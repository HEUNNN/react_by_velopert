import useInput from "./useInput";

const InfoUseInput = () => {
  const [state, onChange] = useInput({ userName: "", nickName: "" });

  return (
    <div>
      <br />
      <br />
      <h3>커스텀 Hook useInput을 사용한 인풋관리</h3>
      <div>
        <input name="userName" value={state.userName} onChange={onChange} />
        <input name="nickName" value={state.nickName} onChange={onChange} />
      </div>
      <div>
        <b>이름: {state.userName}</b>
        <b>닉네임: {state.nickName}</b>
      </div>
    </div>
  );
};
export default InfoUseInput;
