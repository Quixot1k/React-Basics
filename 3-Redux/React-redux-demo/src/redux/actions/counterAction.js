import store from "../store";
import { ADD, MINUS } from "../constant";

export const addActionCreator = (data) => {
  return { type: ADD, data };
};

export const minusActionCreator = (data) => {
  return { type: MINUS, data };
};

export const addAsyncActionCreator = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(addActionCreator(data));
    }, time);
  };
};
