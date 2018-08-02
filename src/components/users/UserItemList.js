import React from "react";
import { Link } from "react-router-dom";
import { UserItem, UserItemRole, UserItemTitle } from "../../utilities/Users";

const UserItemList = props => {
  return (
    <div>
      {props.users.map(user => (
        <UserItem>
          <Link to="/app/admin/users/user/:id">
            <div style={{ margin: "8px 16px" }}>
              <div style={{ display: "inline-block" }}>
                <UserItemTitle>{user.firstName} </UserItemTitle>
                <UserItemRole>User Role </UserItemRole>
              </div>
              <div style={{ display: "inline-block", float: "right" }}>
                <span style={{ color: "white" }}>></span>
              </div>
            </div>
          </Link>
        </UserItem>
      ))}
    </div>
  );
};

export default UserItemList;
