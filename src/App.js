import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/react";
import _ from "lodash";
import Navbar from "./components/navbar";
import MainCounter from "./components/maincounter";
import Users from "./components/users";
import Orders from "./components/orders";
import Notfound from "./components/notfound";
import LoginForm from "./components/loginForm";
import Register from "./components/registerForm";
import "./App.css";
import CallingBackEnd from "./components/callingBackend";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, like: false, color: "Green" },
      { id: 2, value: 0, like: false, color: "Red" },
      { id: 3, value: 0, like: false, color: "Yellow" },
      { id: 4, value: 0, like: false, color: "Green" },
      { id: 5, value: 0, like: false, color: "Green" },
      { id: 6, value: 0, like: false, color: "Yellow" },
      { id: 7, value: 0, like: false, color: "Red" },
      { id: 8, value: 0, like: false, color: "Yellow" },
    ],
    pageSize: 3,
    currentPage: 1,
    selectedColor: "",
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (cid) => {
    const counters = this.state.counters.filter((c) => c.id !== cid);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleLike = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].like = !counters[index].like;
    this.setState({ counters });
    //console.log("like clicked", counter);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleColorSelect = (color) => {
    //console.log("color", color);
    this.setState({ selectedColor: color, currentPage: 1 });
  };

  handleSort = (path) => {
    //console.log("column", column);
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  render() {
    //   const filtered =
    //   selectedColor && selectedColor != "All"
    //     ? this.state.counters.filter((c) => c.color === selectedColor)
    //     : allCounters;

    // // const sorted = _.groupBy(filtered, [sortColumn.path], [sortColumn.order]);

    // // const counters = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          totalLike={this.state.counters.filter((c) => c.like === true).length}
          // countersCount={filtered.length}
        />
        <main className="container">
          <Switch>
            <Route path="/backend" component={CallingBackEnd}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route
              path="/maincounter"
              render={(props) => (
                <MainCounter
                  counters={this.state.counters}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  sortColumn={this.state.sortColumn}
                  selectedColor={this.state.selectedColor}
                  handleDelete={this.handleDelete}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  handleLike={this.handleLike}
                  handlePageChange={this.handlePageChange}
                  handleColorSelect={this.handleColorSelect}
                  handleSort={this.handleSort}
                  filtered={this.filtered}
                  {...props}
                />
              )}
            ></Route>
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
