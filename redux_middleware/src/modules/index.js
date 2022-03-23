import { combineReducers } from "redux";
import counter from "./counter";
//root Reducer
const rootReducer = combineReducers({ counter });
export default rootReducer;
