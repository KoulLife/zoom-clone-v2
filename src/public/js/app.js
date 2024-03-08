// socket은 서버로의 연결을 의미함
const socket = new WebSocket(`ws://${window.location.host}`)  //브라우저가 어디에 있는지

// 서버와 연결이 되었을때
socket.addEventListener("open", () => {
  console.log("Connected to Server");
});

// 서버에게 메세지를 받았을때
socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

// 서버와 연결이 끊겼을때
socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});