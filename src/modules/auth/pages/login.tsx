import { successToast } from "../../../utills/toast";
import { toast } from "react-toastify";
import "../styles.scss";
import Counter from "../components/counter";

const Login = () => {
  const success = () => {
    toast("Success", successToast);
  };

  return (
    <>
      <h1>Login</h1>
      <Counter />
      <button onClick={success}>success toast</button>
    </>
  );
};

export default Login;
