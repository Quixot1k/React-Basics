/* actionCreator for Calcualtion */
import { ADD, MINUS } from "./constant";
import store from "./store";

export const createAddAction = (data) => {
  return { type: ADD, data: data };
};

export const createMinusAction = (data) => {
  return { type: MINUS, data: data };
};

export const createAddAsyncAction = (data, timer) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createAddAction(data));
    }, timer);
  };
};
