import "./App.css";
import { Fragment } from "react";
import Counter from "./Counter";
import Password from "./Password";
import Scroll from "./Scroll";
import { useRef } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
      <Password />
      <h3>Scroll Exercise</h3>
      <Scroll />
    </div>
  );
}

export default App;
