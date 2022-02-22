import "./App.css";
import { Fragment } from "react";
import Counter from "./Counter";
import Password from "./Password";
import Scroll from "./Scroll";
import { useRef } from "react";
import IterationSample from "./IterationSample";
import IterationSampleTwo from "./IterationSampleTwo";
import Validation from "./Validation";

function App() {
  return (
    <div className="App">
      <Counter />
      <Password />
      <h3>Scroll Exercise</h3>
      <Scroll />
      <h3>Validation</h3>
      <Validation />
      <h3>Iteration Sample(1)</h3>
      <IterationSample />
      <h3>Iteration Sample 응용(2)</h3>
      <IterationSampleTwo />
    </div>
  );
}

export default App;
