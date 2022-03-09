import React, { Component } from "react";

//stateless functional component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          COUNTERS{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {props.totalCount}
          </span>
          Likes
          <span className="badge badge-pill badge-info m-2">
            {props.totalLike}
          </span>
        </a>
        {/* <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul> */}
        <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
          Showing {props.countersCount} items
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
