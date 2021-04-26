import React from "react";
import style from "../styles/components/Room.css"

// Just layout for room
export class Room extends React.Component {
  render() {
    return (
      <div
        className={this.props.isActive ? "room active" : "room"}
        onClick={(event) => this.props.setActiveRoom(this.props.room)}
      >
        <div className="room__description">
          <div className="room__name">{this.props.room}</div>
          <div className="room__user-cnt">{this.props.usersCount}</div>
        </div>
        <div className="room__right-side">
          <div className="room__new-msg"></div>
          <button
            className="room__exit-btn"
            onClick={(event) => {
              this.props.leaveRoom(this.props.room);
            }}
          >
            c
          </button>
        </div>
      </div>
    );
  }
}
