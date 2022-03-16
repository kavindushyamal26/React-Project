import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //-------------- validation previous methods ------------------------
  // validate = () => {
  //   const errors = { ...this.state.errors };

  //   const { account } = this.state;
  //   if (account.username.trim() === "")
  //     errors.username = "Username is required";

  //   if (account.password.trim() === "")
  //     errors.password = "Password is required";

  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  // validateProperty = (input) => {
  //   if (input.name === "username") {
  //     if (input.value.trim() === "") return "Username is required";
  //   }

  //   if (input.name === "password") {
  //     if (input.value.trim() === "") return "Password is required";
  //   }
  // };
  //-------------------------------------------------------------------------

  doSubmit = () => {
    console.log("submited");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <main className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            autofocus={true}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            onChange={this.handleChange}
            autofocus={false}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </main>
    );
  }
}

export default LoginForm;
