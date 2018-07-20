import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Headcount from "./components/Headcount";
import "./App.css";

class App extends Component {
  render() {
    state = {
      user: {},
      org: {},
      structure: {}
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basecount</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              exact
              path="/headcount"
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
