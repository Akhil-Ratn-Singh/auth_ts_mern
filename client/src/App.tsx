import React, { useEffect } from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useAppSelector } from "./redux/hooks";
import { selectUser } from "./redux/authSlice";

function App() {
  const user = useAppSelector(selectUser);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
