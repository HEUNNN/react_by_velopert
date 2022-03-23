import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const number = 0; //객체일 필요 없다

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1, //action 필요 없으면 파라미터로 안넣어줘도 됨
    [DECREASE]: (state) => state - 1,
  },
  number
);
export default counter;
