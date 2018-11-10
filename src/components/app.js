import React from 'react';
import Header from './Header';
import Register from './Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Practice from './Practice';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/practice" component={Practice} />
        </main>
      </div>
    </Router>
  );
}
