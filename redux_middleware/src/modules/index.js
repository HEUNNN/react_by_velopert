import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
//root Reducer
const rootReducer = combineReducers({ counter, sample });
export default rootReducer;
