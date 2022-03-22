import "./App.css";
import { Component } from "react";
import Counter from "./Counter";
import Password from "./Password";
import Scroll from "./Scroll";
import IterationSample from "./IterationSample";
import IterationSampleTwo from "./IterationSampleTwo";
import Validation from "./Validation";
import LifeCycle from "./LifeCycle";
import SassComponent from "./SassComponent";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
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
        <br />
        <h3>Life Cycle</h3>
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycle color={this.state.color} />
        </div>
        <br />
        <h3>Sass Component</h3>
        <SassComponent />
      </div>
    );
  }
}

export default App;
