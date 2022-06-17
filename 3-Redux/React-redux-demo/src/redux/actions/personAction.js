import { ADD_PERSON } from "../constant";
export const addPersonActionCreator = (data) => {
  return { type: ADD_PERSON, data };
};
