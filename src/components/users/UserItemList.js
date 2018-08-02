import React from "react";
import { Link } from "react-router-dom";
import { UserItem, UserItemRole, UserItemTitle } from "../../utilities/Users";

const UserItemList = ({ user }) => {
  return (
    <UserItem>
      <Link to={"/app/admin/users/user/" + user.id}>
        <div style={{ margin: "8px 16px" }}>
          <div style={{ display: "inline-block" }}>
            <UserItemTitle>{user.firstName} </UserItemTitle>
            <UserItemRole>{user.role} </UserItemRole>
          </div>
          <div style={{ display: "inline-block", float: "right" }}>
            <span style={{ color: "white" }}>></span>
          </div>
        </div>
      </Link>
    </UserItem>
  );
};

export default UserItemList;
