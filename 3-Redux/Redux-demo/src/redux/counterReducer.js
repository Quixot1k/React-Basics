import { ADD, MINUS } from "./constant";

/* Reducer for Calculation */
const initState = 0;
export default function calculationReducer(preState = initState, action) {
  // console.log("preState: ", preState);
  const { type, data } = action;
  switch (type) {
    case ADD:
      return preState + data;
    case MINUS:
      return preState - data;
    default:
      return preState;
  }
}
