import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const userRef = useRef(null) as any;
  const passRef = useRef(null) as any;
  const mailRef = useRef(null) as any;

  const hadleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username: userRef.current.value,
        email: passRef.current.value,
        password: passRef.current.value,
      });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h2>Register</h2>
      <form className="input-container" onSubmit={hadleSubmit}>
        <label>
          Username:
          <input type="text" autoFocus name="username" ref={userRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={mailRef} />
        </label>
        <label>
          Password:
          <input type="text" name="password" ref={passRef} />
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
