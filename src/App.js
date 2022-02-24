import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { Component } from "react";
import Pagination from "./components/common/pagination";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, like: false },
      { id: 2, value: 0, like: false },
      { id: 3, value: 0, like: false },
      { id: 4, value: 0, like: false },
      { id: 5, value: 0, like: false },
      { id: 6, value: 0, like: false },
    ],
    pageSize: 3,
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
    console.log(page);
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          totalLike={this.state.counters.filter((c) => c.like === true).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onLike={this.handleLike}
            counters={this.state.counters}
          />
          <Pagination
            itemsCount={this.state.counters.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
          />
        </main>
      </>
    );
  }
}

export default App;
