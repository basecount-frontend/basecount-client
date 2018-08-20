import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Section, UserItemContainer, PageTitle } from "../utilities";
import UsersList from "./users/UsersList";
import UserSettings from "./users/UserSettings";

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
          <Router>
            <Switch>
              <Route
                exact
                path="/app/admin/users"
                render={() => (
                  <div>
                    <PageTitle>User</PageTitle>
                    <UsersList
                      users={users}
                      updateSearchFilter={this.updateSearchFilter}
                      searchFilter={this.state.searchFilter}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/app/admin/users/user/:id"
                render={({ match }) => (
                  <UserSettings match={match} users={users} />
                )}
              />
            </Switch>
          </Router>
        </UserItemContainer>
      </UserSection>
    );
  }
}

const UserSection = Section.extend``;
