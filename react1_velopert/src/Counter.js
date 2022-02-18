import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  render() {
    const { number } = this.state;
    return (
      <div className="counter">
        <h3>Counter Exercise</h3>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
