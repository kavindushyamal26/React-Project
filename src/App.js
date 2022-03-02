import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { Component } from "react";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import { computeHeadingLevel } from "@testing-library/react";
import ListGroup from "./components/common/listGroup";

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

  render() {
    const {
      pageSize,
      currentPage,
      selectedColor,
      counters: allCounters,
    } = this.state;

    //console.log("selcol", selectedColor);
    const filtered =
      selectedColor && selectedColor != "All"
        ? allCounters.filter((c) => c.color === selectedColor)
        : allCounters;
    //console.log("filtered", filtered);

    const counters = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          totalLike={this.state.counters.filter((c) => c.like === true).length}
          countersCount={filtered.length}
        />
        <main className="container">
          <div className="row">
            <div className="col-2 m-3">
              <ListGroup
                counters={this.state.counters}
                selectedItem={this.state.selectedColor}
                onItemSelect={this.handleColorSelect}
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

export default App;
