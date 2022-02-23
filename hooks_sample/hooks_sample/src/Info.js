import { useEffect, useState } from "react";

const Info = () => {
  //Info component 내부
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname });
  });

  useEffect(() => {
    console.log("Mount되었습니다.");
  }, []);

  useEffect(() => {
    console.log("effect(update)");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  useEffect(() => {
    console.log("effect(update)");
    return () => {
      console.log("cleanup only unmount");
    };
  }, []);

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
