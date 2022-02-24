import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement, onLike } =
      this.props;
    return (
      <div>
        <button
          onClick={onReset}
          style={{ backgroundColor: "green" }}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onLike={onLike}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
