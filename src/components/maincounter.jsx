import React, { Component } from "react";
import Counters from "./counters";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import SortGroup from "./common/sortGroup";
import _ from "lodash";

class MainCounter extends Component {
  handleReset = () => {
    const counters = this.props.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedColor,
      counters: allCounters,
      handleIncrement,
      handleDecrement,
      handleDelete,
      handleLike,
      handlePageChange,
      handleColorSelect,
      handleSort,
    } = this.props;

    const filtered =
      selectedColor && selectedColor != "All"
        ? allCounters.filter((c) => c.color === selectedColor)
        : allCounters;

    const sorted = _.groupBy(filtered, [sortColumn.path], [sortColumn.order]);

    const counters = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <div className="row">
          <div className="col-2 m-3">
            <ListGroup
              counters={allCounters}
              selectedItem={selectedColor}
              onItemSelect={handleColorSelect}
            />
          </div>
          <div className="col-2 m-3">
            <SortGroup counters={allCounters} onSort={handleSort} />
          </div>
          <div className="col">
            <Counters
              onDelete={handleDelete}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onReset={this.handleReset}
              onLike={handleLike}
              counters={counters}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MainCounter;
