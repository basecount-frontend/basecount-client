import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    switch (this.props.name) {
      case "hamburger":
        return <svg />;
      case "next-icon-name":
        return <svg />;
      default:
        return <svg />;
    }
  }
}
