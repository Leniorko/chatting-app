import React from "react";
import { UsersList } from "../components/UsersList";
import { RoomsList } from "../components/RoomsList";
import { Chat } from "../components/Chat";
import socketIOClient from "socket.io-client";

export class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      rooms: [],
      apiEndpoint: "http://localhost:4000",
      events: {
        JOIN_NEW_ROOM_EVENT: "joinNewRoom",
        SEND_MESSAGE_EVENT: "sendMessage",
        LEAVE_ROOM_EVENT: "leaveRoom",
        NEW_USER_CONNECTED_EVENT: "newUserConnected",
      },
    };

    this.socket = socketIOClient(this.state.apiEndpoint, {
      query: {
        userName: this.props.location.state.userName,
      },
    });
  }

  addOrJoinRoom = (roomName) => {
    this.socket.emit(this.state.events.JOIN_NEW_ROOM_EVENT, {
      roomName: roomName
    })
  };

  leaveRoom = (socket) => {};

  //TODO Add room entrance
  //TODO Add room leave
  //TODO render rooms
  componentDidMount() {
    this.socket.on(this.state.events.NEW_USER_CONNECTED_EVENT, (args) => {
      this.setState({
        users: args.users,
      });
    });

    this.socket.on(this.state.events.JOIN_NEW_ROOM_EVENT, (args) => {
      this.setState({
        rooms: args.rooms
      })
    })

  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <aside className="side-pannel">
          <UsersList users={this.state.users} />
          <RoomsList
            rooms={this.state.rooms}
            addOrJoinRoom={this.addOrJoinRoom}
            leaveRoom={this.leaveRoom}
          />
        </aside>
        <Chat />
      </>
    );
  }
}
