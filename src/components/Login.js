import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login(props) {
  return (
    <div>
      <section>
        <h3>Login</h3>
        <form class="login-form">
          <div>
            <label for="username">Username</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
          <div>
            Don't have an account? <Link to="/register">Register here!</Link>
          </div>
        </form>
      </section>
    </div>
  );
}
