const server = require("http").createServer();
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const PORT = 4000;

let JOIN_NEW_ROOM_EVENT = "joinNewRoom";
let SEND_MESSAGE_EVENT = "sendMessage";
let LEAVE_ROOM_EVENT = "leaveRoom";
let NEW_USER_CONNECTED_EVENT = "newUserConnected"

let stats = {};


socketIo.on("connection", (socket) => {
  let socketUsername = socket.handshake.query.userName;

  stats[socketUsername] = [];

  console.log(stats);

  socketIo.emit(NEW_USER_CONNECTED_EVENT, {
    users: Object.keys(stats)
  })

  socket.on(JOIN_NEW_ROOM_EVENT, (args) => {
    let roomName = args.roomName;

    stats[socketUsername].push(roomName);
    socket.join(roomName);

    console.log(stats[socketUsername]);

    socketIo.emit(JOIN_NEW_ROOM_EVENT, {
      rooms: stats[socketUsername]
    })

  });

  socket.on(SEND_MESSAGE_EVENT, (args) => {
    let messageRoom = args.messageRoom;

    socketIo.in(messageRoom).emit(SEND_MESSAGE_EVENT, args.message);
  });

  socket.on(LEAVE_ROOM_EVENT, (args) => {
    let roomToLeave = args.roomToLeave;

    stats[socketUsername].splice(stats[socketUsername].indexOf(roomToLeave));
  });

  socket.on("disconnect", (args) => {
    delete stats[socketUsername];
  });
});


server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
