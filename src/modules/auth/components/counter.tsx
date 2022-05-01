import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utills/store/reducers';
import { decreaseCounter, increaseCounter } from '../store/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.auth.counter);

  return (
    <>
      <p className="blue">{counter}</p>
      <button type='button' onClick={() => dispatch(increaseCounter())}>+</button>
      <button type='button' onClick={() => dispatch(decreaseCounter())}>-</button>
    </>
  );
};

export default Counter;
