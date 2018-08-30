import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  background,
  blue,
  blueDark,
  red,
  blueLight,
  orange,
  silver,
  white
} from "../utilities/colors";

export default class Menu extends Component {
  logoutClick = () => {
    console.log("logout user");
  };
  render() {
    return (
      <MenuDrop>
        <ul>
          <li>
            <Link to="/app/headcount">Headcount</Link>
          </li>
          <li>
            <Link to="/app/admin/users">User</Link>
          </li>
          <li>
            <Link to="/app/admin/sites">Sites</Link>
          </li>
          <li>
            <Link to="/app/account">Your settings</Link>
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
    padding-top: 80px;
    padding-right: 30px;
    & li {
      list-style: none;
      text-align: right;
      & a {
        color: ${white};
        line-height: 200%;
        font-size: 1.5em;
        text-decoration: none !important;
        text-transform: uppercase;
      }
    }
  }
`;
