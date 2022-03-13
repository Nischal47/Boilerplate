import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../utills/store/reducers";
import { decreaseCounter, increaseCounter } from "../store/actions";
import { successToast } from "../../../utills/toast";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.auth.counter);

  const success = () => {
    toast("Success", successToast);
  };

  return (
    <>
      <h1>Login</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>+</button>
      <button onClick={() => dispatch(decreaseCounter())}>-</button>
      <button onClick={success}>success toast</button>
    </>
  );
};

export default Login;
