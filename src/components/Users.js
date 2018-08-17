import React, { Component } from "react";
import {
  Section,
  ButtonPrimary,
  ButtonSecondary,
  Icon,
  UserItemContainer,
  PageTitle
} from "../utilities";
import UserFilter from "./users/UserFilter";
import UserItemList from "./users/UserItemList";

export default class Users extends Component {
  state = {
    searchFilter: ""
  };

  updateSearchFilter = searchFilter => {
    this.setState({ searchFilter });
  };

  render() {
    const users = Object.values(this.props.users);
    return (
      <UserSection>
        <UserItemContainer>
          <PageTitle>User</PageTitle>
          <UserFilter updateSearchFilter={this.updateSearchFilter} />
          {users
            .filter(
              user =>
                this.state.searchFilter === "" ||
                user.firstName
                  .toLowerCase()
                  .indexOf(this.state.searchFilter.toLowerCase()) !== -1 ||
                user.lastName
                  .toLowerCase()
                  .indexOf(this.state.searchFilter.toLowerCase()) !== -1 ||
                user.role
                  .toLowerCase()
                  .indexOf(this.state.searchFilter.toLowerCase()) !== -1
            )
            .map(user => <UserItemList user={user} key={"user-" + user.id} />)}
          <ButtonPrimary style={{ margin: "0 auto", width: "90%" }}>
            Add User
          </ButtonPrimary>
        </UserItemContainer>
      </UserSection>
    );
  }
}

const UserSection = Section.extend``;
