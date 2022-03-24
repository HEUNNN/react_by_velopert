import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const onIncrease = createAction(INCREASE);
export const onDecrease = createAction(DECREASE);

//1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(onIncrease());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(onDecrease());
  }, 1000);
};

const number = 0; //객체일 필요 없다

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1, //action 필요 없으면 파라미터로 안넣어줘도 됨
    [DECREASE]: (state) => state - 1,
  },
  number
);
export default counter;
