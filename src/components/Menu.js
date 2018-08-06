import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Menu extends Component {
  logoutClick = () => {
    console.log("logout user");
  };
  render() {
    return (
      <MenuDrop>
        <ul>
          <li>
            <a href="#">Headcount</a>
          </li>
          <li>
            <a href="#">User</a>
          </li>
          <li>
            <a href="#">Sites</a>
          </li>
          <li>
            <a href="#">Your settings</a>
          </li>
          <li>
            <a href="#" onClick={this.logoutClick}>
              Logout
            </a>
          </li>
        </ul>
      </MenuDrop>
    );
  }
}

const MenuDrop = styled.div`
  ul {
    padding: 0;
    & li {
      list-style: none;
      & a {
        text-decoration: none !important;
        text-transform: uppercase;
      }
    }
  }
`;
