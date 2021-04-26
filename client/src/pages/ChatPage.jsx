import React from "react";
import { UsersList } from "../components/UsersList";
import { RoomsList } from "../components/RoomsList";
import { Chat } from "../components/Chat";
import socketIOClient from "socket.io-client";
import style from "../styles/pages/ChatPage.css";


/**
 * Main page of app
 * Contains main logic and data
 */
export class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiEndpoint: "http://localhost:4000",
      rooms: {},
      activeRoom: "",
      events: {
        JOIN_NEW_ROOM_EVENT: "joinNewRoom",
        SEND_MESSAGE_EVENT: "sendMessage",
        LEAVE_ROOM_EVENT: "leaveRoom",
        NEW_USER_CONNECTED_EVENT: "newUserConnected",
      },
    };

    // Socket connection init
    this.socket = socketIOClient(this.state.apiEndpoint, {
      query: {
        userName: this.props.location.state.userName,
      },
    });
  }

  // Join room handler
  addOrJoinRoom = (roomName) => {
    this.socket.emit(this.state.events.JOIN_NEW_ROOM_EVENT, {
      roomName: roomName,
    });
  };

  // Leave room handler
  leaveRoom = (roomName) => {
    this.socket.emit(this.state.events.LEAVE_ROOM_EVENT, {
      roomToLeave: roomName,
    });
  };

  // Handler for clicks on rooms.
  setActiveRoom = (roomName) => {
    this.setState({
      activeRoom: roomName,
    });
  };

  // Handler for message send
  sendMessage = (message) => {
    this.socket.emit(this.state.events.SEND_MESSAGE_EVENT, {
      message: message,
      messageRoom: this.state.activeRoom,
    });
  };

  /**
   * componentDidMount() constains all event handlers that app recieves
   * from socket.
   * 
   * First - Handle for when user join room. We recieve entire json of rooms
   * and then keeps only ones that have our user in it
   * 
   * Second - Leave from room. Simply deliting information about room
   */
  componentDidMount() {
    this.socket.on(this.state.events.JOIN_NEW_ROOM_EVENT, (args) => {
      this.setState((previousState) => {
        let rooms = {};
        if (args.users.includes(this.props.location.state.userName)) {
          if (!this.state.rooms[args.roomName]) {
            rooms = Object.assign({ [args.roomName]: {} }, previousState.rooms);
          } else {
            rooms = Object.assign({}, previousState.rooms);
          }
          console.log(rooms);
          rooms[args.roomName]["users"] = args.users;
          this.setState({
            rooms: rooms,
          });
        }
      });
    });

    this.socket.on(this.state.events.LEAVE_ROOM_EVENT, (args) => {
      this.setState((previousState) => {
        let rooms = this.state.rooms;

        delete rooms[args.roomToLeave];
        this.setState({ rooms: rooms });
      });
    });

    // Do not work
    this.socket.on(this.state.events.SEND_MESSAGE_EVENT, (args) => {
    });
  }

  componentWillUnmount() {
    this.socket.off(this.state.events.JOIN_NEW_ROOM_EVENT);
    this.socket.off(this.state.events.LEAVE_ROOM_EVENT);
  }

  render() {
    return (
      <div className="chatPage">
        <aside className="side-pannel">
          <UsersList
            users={
              this.state.rooms[this.state.activeRoom]
                ? this.state.rooms[this.state.activeRoom]["users"]
                : []
            }
          />
          <RoomsList
            rooms={this.state.rooms}
            addOrJoinRoom={this.addOrJoinRoom}
            activeRoom={this.state.activeRoom}
            leaveRoom={this.leaveRoom}
            setActiveRoom={this.setActiveRoom}
          />
        </aside>
        <div className="chatPart">
          <Chat
            messages={
              this.state.rooms[this.state.activeRoom]
                ? this.state.rooms[this.state.activeRoom]["messages"]
                : []
            }
            sendMessage={this.sendMessage}
          />
        </div>
      </div>
    );
  }
}
