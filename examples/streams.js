const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

// // Один чанк по дефолту 64кб

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });
// stream.on("end", () => console.log("End reading"));
// stream.on("open", () => console.log("Start reading"));
// stream.on("error", (e) => console.log(e));

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "write.txt")
// );
// for (let index = 0; index < 20; index++) {
//   writableStream.write(index + "\n");
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error')

const http = require("http");

http.createServer((req, res) => {
  //req = readable stream
  //res = writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

  stream.pipe(res);
});
