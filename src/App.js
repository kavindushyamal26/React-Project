import "./App.css";
import { Component } from "react";
import { computeHeadingLevel } from "@testing-library/react";
import _ from "lodash";
import MainCounter from "./components/maincounter";

class App extends Component {
  render() {
    return (
      <>
        <MainCounter />
      </>
    );
  }
}

export default App;
