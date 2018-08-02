import React, { Component } from "react";
import { UserFilterRow } from "../../utilities/Users";

class UserFilter extends Component {
  render() {
    return (
      <UserFilterRow>
        <input
          type="search"
          style={{ height: "32px", width: "100%", paddingLeft: "16px" }}
        />
        <div style={{ color: "white" }}>ico</div>
      </UserFilterRow>
    );
  }
}

export default UserFilter;
