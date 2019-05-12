import React from "react";
import App from "./components/App";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" component={App} />
        <Route path="/profile/:id" component={Profile} />
      </Router>
    </div>
  );
};

export default AppRouter;
