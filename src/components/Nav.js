import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav className="nav-container">
      <div>Noted</div>
      <Link to="/login" class="nav-item">
        Login
      </Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
