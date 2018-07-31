import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section, ButtonPrimary, ButtonSecondary } from "../utilities";

export default class Login extends Component {
  render() {
    return (
      <Link to="/app/headcount">
        <ButtonPrimary>Login</ButtonPrimary>
      </Link>
    );
  }
}
