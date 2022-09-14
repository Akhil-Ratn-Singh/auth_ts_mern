import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <ul className="nav-container">
        <Link className="link" to="/">
          <li className="nav-element">Home</li>
        </Link>
        <Link className="link" to="/register">
          <li className="nav-element">Register</li>
        </Link>
        <Link className="link" to="/login">
          <li className="nav-element">Login</li>
        </Link>
        
      </ul>
    </div>
  );
};

export default Navbar;
