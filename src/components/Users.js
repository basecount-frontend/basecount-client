import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section, ButtonPrimary, ButtonSecondary, Icon } from "../utilities";

export default class Users extends Component {
  render() {
    return (
      <UserSection>
        <div className="section-wrapper">
          <div className="users__filter">
            <input type="search" />
            <Icon name="filter" />
          </div>

          <div className="users__item">
            <Link to="/app/admin/users/user/:id">
              <div className="users__item__orgLink">
                Dummy Org <span>></span>{" "}
              </div>
              <div className="users__item">Dummy Manager</div>
            </Link>
            <ButtonPrimary>Add User</ButtonPrimary>
          </div>
        </div>
      </UserSection>
    );
  }
}

const UserSection = Section.extend``;
