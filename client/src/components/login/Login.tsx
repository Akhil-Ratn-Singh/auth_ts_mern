import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";
const Login: React.FC = () => {
  const navigate = useNavigate()
  const userRef = useRef(null) as any;
  const passRef = useRef(null) as any;

  const hadleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      console.log(res.data);
      navigate("/")
    } catch (error) {
      console.log(error);
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
    </section>
  );
};
export default Login;
