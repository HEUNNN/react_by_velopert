import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decreaseAsync, increaseAsync } from "../modules/counter";
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};
const mapStateToProps = (state) => ({
  number: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  increaseAsync: () => dispatch(increaseAsync()),
  decreaseAsync: () => dispatch(decreaseAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
