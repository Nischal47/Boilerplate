export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export enum authActionTypes {
  // eslint-disable-next-line no-unused-vars
  INCREASE_COUNTER = 'INCREASE_COUNTER',
  // eslint-disable-next-line no-unused-vars
  DECREASE_COUNTER = 'DECREASE_COUNTER',
}

interface increaseAction {
  type: authActionTypes.INCREASE_COUNTER;
}

interface decreaseAction {
  type: authActionTypes.DECREASE_COUNTER;
}

export type authAction = increaseAction | decreaseAction;
