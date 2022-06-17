import { ADD_PERSON } from "../constant";
import { nanoid } from "nanoid";

const initState = [{ id: nanoid(), name: "Tom", age: 18 }];
function personReducer(preState = initState, action) {
  console.log("personReducer");
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [...preState, data];
    default:
      return preState;
  }
}

export default personReducer;
