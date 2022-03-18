import React, { Component } from "react";
import axios from "axios";

class CallingBackEnd extends Component {
  state = {};

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("response", response);
  }
  render() {
    return <h1>BackEnd</h1>;
  }
}

export default CallingBackEnd;
