const server = require("http").createServer();
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const PORT = 4000;

// Events constants
let JOIN_NEW_ROOM_EVENT = "joinNewRoom";
let SEND_MESSAGE_EVENT = "sendMessage";
let LEAVE_ROOM_EVENT = "leaveRoom";
let NEW_USER_CONNECTED_EVENT = "newUserConnected";

let roomsAndUserData = {};
let msgCounter = 0;

/**
 * Connection handler.
 * Simply saves username in variable
 */
socketIo.on("connection", (socket) => {
  let socketUsername = socket.handshake.query.userName;

  /**
   * Handler for user joining in new room
   * Saves information about room into roomsAndUserData in form:
   * {
   * roomsAndUserData: {
   *  room1: {
   *  users: ["user1", "user2"]
   *  messages: ["message1", "message2"]
   *    }
   *  }
   * }
   */
  socket.on(JOIN_NEW_ROOM_EVENT, (args) => {
    let roomName = args.roomName;

    if (!roomsAndUserData[roomName]) {
      roomsAndUserData[roomName] = [];
    }

    if (!roomsAndUserData[roomName]["users"]) {
      roomsAndUserData[roomName] = [];
    }

    if (roomsAndUserData[roomName].includes(socketUsername)) {
      return;
    }

    roomsAndUserData[roomName]["users"].push(socketUsername);
    socket.join(roomName);

    socketIo.emit(JOIN_NEW_ROOM_EVENT, {
      roomName: roomName,
      users: roomsAndUserData[roomName],
    });
  });

  /**
   * Sends message to all users inside room
   */
  socket.on(SEND_MESSAGE_EVENT, (args) => {
    let messageRoom = args.messageRoom;
    currentKey = socketUsername.toString() + msgCounter.toString();
    socketIo.in(messageRoom).emit(SEND_MESSAGE_EVENT, {
      [currentKey]: args.message,
    });
  });

  /**
   * Handle event when user lives room.
   * Deleting him from users array.
   */
  socket.on(LEAVE_ROOM_EVENT, (args) => {
    let roomToLeave = args.roomToLeave;

    roomsAndUserData[roomToLeave]["users"].splice(
      roomsAndUserData[roomToLeave]["users"].indexOf(socketUsername)
    );

    socket.leave(roomToLeave);

    socket.emit(LEAVE_ROOM_EVENT, {
      roomToLeave: roomToLeave,
    });
  });

  /**
   * I didn't come up with idea how to clear data about user when
   *  he disconects
   */
  socket.on("disconnect", (args) => {});
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
