import React from "react";
import { User } from "./User";
import style from "../styles/components/UsersList.css"

/**
 * Component for display users data
 */
export class UsersList extends React.Component {
  render() {
    return (
      <div className="user-list">
        {this.props.users ? (
          this.props.users.map((user) => {
            return <User key={user} user={user} />;
          })
        ) : (
          <div className="user-list__placeholder">
            Users will display here
          </div>
        )}
      </div>
    );
  }
}
