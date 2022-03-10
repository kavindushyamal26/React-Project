import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/react";
import _ from "lodash";
import "./App.css";
import MainCounter from "./components/maincounter";
import Users from "./components/users";
import Orders from "./components/orders";
import Notfound from "./components/notfound";

class App extends Component {
  render() {
    return (
      <>
        <main>
          <Switch>
            <Route path="/maincounter" component={MainCounter}></Route>
            <Route path="/users" component={Users}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/notfound" component={Notfound}></Route>
            <Redirect from="/" exact to="/maincounter" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
