import { authActionTypes } from "./actionTypes";

export const increaseCounter = () => {
  console.log("hello");
  return {
    type: authActionTypes.INCREASE_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: authActionTypes.DECREASE_COUNTER,
  };
};
