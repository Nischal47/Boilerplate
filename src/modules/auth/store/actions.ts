import { authActionTypes } from './actionTypes';

export const increaseCounter = () => ({
    type: authActionTypes.INCREASE_COUNTER,
  });

export const decreaseCounter = () => ({
    type: authActionTypes.DECREASE_COUNTER,
  });
