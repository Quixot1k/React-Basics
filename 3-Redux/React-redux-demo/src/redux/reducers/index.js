import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import personReducer from "./personReducer";

/* 
State = {
  counter:
  personList:
}
*/
const allReducers = combineReducers({
  counter: counterReducer,
  personList: personReducer,
});

export default allReducers;
