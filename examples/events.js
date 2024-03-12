const Emitter = require("events");

const emitter = new Emitter();

const callBack = (data, second, third) => {
  console.log("You sent message: " + data);
  console.log("Second arg: " + second);
};

// emitter.on("message", (data, second, third) => {
//   console.log("You sent message: " + data);
//   console.log("Second arg: " + second);
// });

emitter.on("message", callBack);

emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");

//emitter.removeAllListeners();
emitter.removeListener("message", callBack);

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "You dont send message");
}
