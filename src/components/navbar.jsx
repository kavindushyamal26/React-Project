import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//stateless functional component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/maincounter">
          COUNTER APPLICATION
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/maincounter">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/orders">
              Orders
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/backend">
              BackEnd
            </NavLink>
          </div>
          <div></div>
        </div>
        <span className="navbar-text">Count</span>
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCount}
        </span>
        <span className="navbar-text">Like</span>
        <span className="badge badge-pill badge-info m-2">
          {props.totalLike}{" "}
        </span>
        <span
          className="navbar-text ml-5"
          style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#A46C5F" }}
        >
          Showing {props.countersCount} items
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
