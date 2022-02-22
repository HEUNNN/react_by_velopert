import { useState } from "react";
import "./Validation.css";

const Validation = () => {
  const [password, setPassword] = useState({
    p: "",
    clicked: false,
    validation: false,
  });
  const handleVal = (e) => {
    setPassword({ ...password, p: e.target.value });
  };
  const onVal = () => {
    if (password.p === "0000") {
      setPassword({ ...password, validation: true });
    }
  };
  return (
    <div className="Validation">
      <div>
        <input
          type="password"
          value={password.p}
          onChange={handleVal}
          className={password.validation === true ? "s" : "f"}
        ></input>
        <button onClick={onVal}>validation</button>
      </div>
    </div>
  );
};
export default Validation;
