import React from "react";
import { register } from "../services/userService";
import Joi from "joi";
import Form from "./common/form";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", name: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required(),
    name: Joi.string().required(),
    password: Joi.string()
      .min(8)
      .required()
  };

  doSubmit = async () => {
    try {
      const { headers } = await register(this.state.data);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response);
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="headings">Register</h1>
        <form className="form-style" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("name", "Full Name")}
          {this.renderInput("password", "Password", "Password")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
