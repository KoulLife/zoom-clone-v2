import * as http from "http";
import express from "express"
import {WebSocket, WebSocketServer} from "ws";

const app = express()

// pug 설정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
// route 설정
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`http://localhost:3000`);
const server = http.createServer(app); //server에서 ws를 만들 수 있게 되었다.
const wss = new WebSocketServer({server});  //WebSocket 서버와 http 서버 모두 돌릴 수 있게 되었다.

// function handleConnection(socket){  // socket은 연결된 브라우
//   console.log(socket)
// }

wss.on("connection", (socket) => {
  console.log("Connected to Browser");
  socket.on("close", () => console.log("Disconnected from the Browser"));
  socket.send("hello");
});

server.listen(3000, handleListen);