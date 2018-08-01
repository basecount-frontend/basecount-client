import React, { Component } from "react";
import { blue, blueDark } from "./../utilities/colors";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <MainHeader>
        <div className="header__logo">{this.props.orgName}</div>
        <div className="header__nav">DROP</div>
      </MainHeader>
    );
  }
}

const MainHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  justify-content: space-between;
  padding: 20px;
  .header__logo {
    color: ${blue};
  }
  .header__nav {
    color: ${blueDark};
  }
`;
