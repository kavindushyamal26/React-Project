import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import SortGroup from "./common/sortGroup";
import _ from "lodash";

class MainCounter extends Component {
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
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (cid) => {
    //console.log("delete", cid);
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

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
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
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedColor,
      counters: allCounters,
    } = this.state;

    //console.log("selcol", selectedColor);
    const filtered =
      selectedColor && selectedColor != "All"
        ? allCounters.filter((c) => c.color === selectedColor)
        : allCounters;
    //console.log("filtered", filtered);

    console.log("sortcolum", [sortColumn.path]);
    const sorted = _.groupBy(filtered, [sortColumn.path], [sortColumn.order]);
    //const sorted = filtered.sort((a, b) => a.color > b.color);
    console.log("filtered", filtered);
    console.log("Sorted", sorted);

    const counters = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          totalLike={this.state.counters.filter((c) => c.like === true).length}
          countersCount={filtered.length}
        />
        {/* <div>
              <Route path="/users" component={Users}></Route>
              <Route path="/" component={App}></Route>
            </div> */}
        <main className="container">
          <div className="row">
            <div className="col-2 m-3">
              <ListGroup
                counters={this.state.counters}
                selectedItem={this.state.selectedColor}
                onItemSelect={this.handleColorSelect}
              />
            </div>
            <div className="col-2 m-3">
              <SortGroup
                counters={this.state.counters}
                onSort={this.handleSort}
              />
            </div>
            <div className="col">
              <Counters
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onReset={this.handleReset}
                onLike={this.handleLike}
                counters={counters}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MainCounter;
