import React from "react";
import { Room } from "./Room";
import style from "../styles/components/RoomsList.css";

/**
 * Container for rooms. Contains logic for adding new room
 */
export class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomName: "",
    };
  }

  render() {
    return (
      <div className="room-list__wrapper">
        <div className="room-list">
          {Object.keys(this.props.rooms) != 0 ? (
            Object.keys(this.props.rooms).map((room) => {
              return (
                <Room
                  key={room}
                  room={room}
                  isActive={room === this.props.activeRoom}
                  usersCount={this.props.rooms[room].length}
                  setActiveRoom={this.props.setActiveRoom}
                  leaveRoom={this.props.leaveRoom}
                />
              );
            })
          ) : (
            <div className="room-list__placeholder">
              Rooms will display here
            </div>
          )}
        </div>
        <input
          type="text"
          className="room-list_new-room-name"
          placeholder="Enter room name to join or create"
          value={this.state.newRoomName}
          onChange={(e) => {
            this.setState({
              newRoomName: e.target.value,
            });
          }}
        />
        <button
          className="new-room-btn"
          onClick={(e) => {
            if (this.state.newRoomName !== "") {
              this.props.addOrJoinRoom(this.state.newRoomName);
              this.setState({
                newRoomName: "",
              });
            }
          }}
        >
          Add new room
        </button>
      </div>
    );
  }
}
