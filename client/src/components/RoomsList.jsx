import React from "react";
import { Room } from "./Room";

export class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomName: "",
    };
  }

  render() {
    return (
      <>
        <div className="room-list">
          {this.props.rooms.map((room) => {
            return <Room key={room} room={room} />;
          })}
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
        <button className="new-room-btn" onClick={(e)=>{
          this.props.addOrJoinRoom(this.state.newRoomName)
          this.setState({
            newRoomName: ""
          })
        }}>Add new room</button>
      </>
    );
  }
}
