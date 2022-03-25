import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  };

  const onMouseOver = () => {
    SplitMe.preload(); //컴포넌트 미리 불러오기
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
