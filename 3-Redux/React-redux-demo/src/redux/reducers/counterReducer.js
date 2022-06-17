import { ADD, MINUS } from "../constant";

const initState = 100;
function countReducer(preState = initState, action) {
  console.log("counterReducer");
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

export default countReducer;
