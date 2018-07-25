import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import axios from "axios";
import Header from "./components/Header";
import Headcount from "./components/Headcount";
import Sites from "./components/Sites";
import Account from "./components/Account";
import "./App.css";
import data from "./data/front-end.json";

class App extends Component {
  state = {
    appUser: {},
    org: {},
    structure: {}
  };

  componentWillMount() {
    console.log(data);
    const { appUser, org, structure } = data;
    this.setState({
      appUser,
      org,
      structure
    });
  }

  render() {
    return (
      <div className="App">
        <Header orgName={this.state.org.orgName} />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Headcount user={this.state.user} org={this.state.org} />
              )}
            />
            <Route
              exact
              path="/admin/sites"
              render={() => (
                <Sites user={this.state.user} org={this.state.org} />
              )}
            />
            <Route
              exact
              path="/admin/users"
              render={() => (
                <Sites
                  user={this.state.user}
                  org={this.state.org}
                  users={this.state.users}
                />
              )}
            />
            <Route
              exact
              path="/account"
              render={() => <Account user={this.state.user} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
