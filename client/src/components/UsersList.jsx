import React from "react";
import { User } from "./User";

export class UsersList extends React.Component {
  render() {
    return (
      <div className="user-list">
        {this.props.users.map((user) => {
          return <User key={user} user={user} />;
        })}
      </div>
    );
  }
}
