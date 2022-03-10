import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <main className="container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </main>
    );
  }
}

export default LoginForm;
