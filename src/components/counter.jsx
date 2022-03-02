import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   id: this.props.counter.id,
  // };

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  likeeffectt() {
    let likeclass = "mr-2 fa fa-heart";
    if (!this.props.counter.like) likeclass += "-o";
    return likeclass;
  }

  getBadgeClases() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getColorClases() {
    let classes = "badge m-2 badge-";
    if (this.props.counter.color === "Red") {
      classes += "danger";
    }
    if (this.props.counter.color === "Green") {
      classes += "success";
    }
    if (this.props.counter.color === "Yellow") {
      classes += "warning";
    }
    return classes;
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // const {counter,onIncrement, onDelete } = this.props
    //console.log("props", this.props);
    return (
      <div className="row">
        <div className="col-sm-1">
          <span className={this.getBadgeClases()}>{this.formatCount()}</span>
        </div>
        <div className="col-sm-11">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <i
            className={this.likeeffectt()}
            onClick={() => this.props.onLike(this.props.counter)}
            style={{ cursor: "pointer" }}
            aria-hidden="true"
          ></i>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-danger"
          >
            X
          </button>
          <span className={this.getColorClases()}>
            {this.props.counter.color}
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
