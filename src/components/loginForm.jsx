import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //-------------- validation previous methods (without Joi) ------------------------
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
  //---------------------------------------------------------------------------------

  doSubmit = () => {
    console.log("submited");
  };

  render() {
    return (
      <main className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderButton("Login")}
        </form>
      </main>
    );
  }
}

export default LoginForm;
