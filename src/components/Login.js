import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="wrapper">
      <div className="flex-container">
        <h2 className="intro-text">Login</h2>
        <LoginForm />
        <div className="flex-item">
          <Link to="/register">
            <button class="fp-button">Register</button>
          </Link>
          <Link to="/">
            <button class="fp-button">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
