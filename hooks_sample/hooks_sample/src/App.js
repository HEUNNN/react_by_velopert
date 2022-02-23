import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import Info from "./Info";
function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <h3>Counter</h3>
      <Counter />
      <br />
      <hr />
      <h3>Information input(isVisible)</h3>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "숨기기" : "보이기"}
      </button>
      <br />
      <br />
      {isVisible && <Info />}
      <hr />
    </div>
  );
}

export default App;
