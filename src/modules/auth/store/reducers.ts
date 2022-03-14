import { authAction, authActionTypes } from './actionTypes';

interface InitialStateProps {
  counter: number;
}

export const initialState: InitialStateProps = {
  counter: 0,
};

export default (
  state: InitialStateProps = initialState,
  actions: authAction
) => {
  switch (actions.type) {
    case authActionTypes.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case authActionTypes.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
