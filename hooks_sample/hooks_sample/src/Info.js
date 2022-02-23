import { useState } from "react";

const Info = () => {
  //Info component 내부
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const onHandleName = (e) => {
    setName(e.target.value);
  };
  const onHandleNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div className="info">
      Name: <input value={name} onChange={onHandleName}></input>
      <br />
      <br />
      Nickname: <input value={nickname} onChange={onHandleNickName}></input>
      <h3>
        이름: {name}, 닉네임: {nickname}
      </h3>
    </div>
  );
};
export default Info;
