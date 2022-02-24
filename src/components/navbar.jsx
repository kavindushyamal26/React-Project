import React, { Component } from "react";

//stateless functional component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {props.totalCount}
          </span>
          Likes
          <span className="badge badge-pill badge-info m-2">
            {props.totalLike}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
