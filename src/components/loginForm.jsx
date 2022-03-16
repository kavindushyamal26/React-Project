import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].message : null;
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
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    //console.log("E :", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    //console.log("submited");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <main className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            autofocus={true}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
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
