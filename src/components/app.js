import React from "react";
import Header from "./Header";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </main>
      </div>
    </Router>
  );
}
