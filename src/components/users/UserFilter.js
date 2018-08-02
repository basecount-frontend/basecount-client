import React, { Component } from "react";

class UserFilter extends Component {
  render() {
    return (
      <div className="users__filter" style={{ margin: "0 auto", width: "90%" }}>
        <input
          type="search"
          style={{ display: "inline-block", height: "32px", width: "80%" }}
        />
        <div
          style={{
            display: "inline-block",
            float: "right",
            color: "white",
            width: "18%",
            textAlign: "center"
          }}
        >
          ico
        </div>
      </div>
    );
  }
}

export default UserFilter;
