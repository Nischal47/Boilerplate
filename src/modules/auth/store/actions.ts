import { authActionTypes } from "./actionTypes";

export const increaseCounter = () => {
  return {
    type: authActionTypes.INCREASE_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: authActionTypes.DECREASE_COUNTER,
  };
};
