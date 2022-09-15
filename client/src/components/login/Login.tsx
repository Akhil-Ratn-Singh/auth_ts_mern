import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  loginFailed,
  loginStart,
  loginSuccessful,
  selectError,
} from "../../redux/authSlice";

const Login: React.FC = () => {
  // const user = useAppSelector(selectUser);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userRef = useRef(null) as any;
  const passRef = useRef(null) as any;

  // console.log(user, "user state");
  const hadleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch(loginSuccessful(res.data));
      // console.log(res.data);
      navigate("/");
    } catch (error) {
      dispatch(loginFailed(error as string));
      // console.log(error);
    }
  };

  return (
    <section className="container">
      <h2>Login</h2>
      <form className="input-container" onSubmit={hadleSubmit}>
        <label>
          Username:
          <input type="text" autoFocus name="username" ref={userRef} />
        </label>
        <label>
          Password:
          <input type="text" name="password" ref={passRef} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <h1>{error} </h1>}
    </section>
  );
};
export default Login;
