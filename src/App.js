import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import About from "./views/About";
import Navbar from "./components/Navbar";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar">
          <Link to="/" className="link">
            8Ball |
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    );
  }
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
