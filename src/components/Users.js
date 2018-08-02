import React, { Component } from "react";
import { Section, ButtonPrimary, ButtonSecondary, Icon } from "../utilities";
import { UserItemContainer } from "../utilities/Users";
import { PageTitle } from "../utilities/Typography";
import UserFilter from "./users/UserFilter";
import UserItemList from "./users/UserItemList";

export default class Users extends Component {
  render() {
    const users = Object.values(this.props.users);

    return (
      <UserSection>
        <UserItemContainer>
          <PageTitle>User</PageTitle>
          <UserFilter />
          <UserItemList users={users} />
          <ButtonPrimary style={{ margin: "0 auto", width: "90%" }}>
            Add User
          </ButtonPrimary>
        </UserItemContainer>
      </UserSection>
    );
  }
}

const UserSection = Section.extend``;
