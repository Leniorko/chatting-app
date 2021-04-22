const server = require("http").createServer();
const socketIo = require("socket.io")(server, {
    cors:{
        origin: "*",
    }
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})