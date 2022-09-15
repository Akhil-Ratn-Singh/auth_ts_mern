import React from "react";
import { logout, selectUser } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./home.scss";

const Home: React.FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };
  return (
    <div>
      <h1>User ID: {user?._id}</h1>
      <h2>User Name: {user?.username}</h2>
      <h3>User Email: {user?.email}</h3>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
