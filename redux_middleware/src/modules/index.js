import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";
//root Reducer
const rootReducer = combineReducers({ counter, sample, loading });
export default rootReducer;
