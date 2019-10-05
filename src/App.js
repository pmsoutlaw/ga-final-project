import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import About from "./views/About";
import Placeholder from "./components/Placeholder";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Placeholder label="Nav Menu"> */}
        <Link to="/"> Homepage | </Link>
        <Link to="/about"> About </Link>
        {/* </Placeholder> */}
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
