const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Dir created.");
// });

// console.log("END");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, "test.txt"), "sdifjsiddff", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.appendFile(path.resolve(__dirname, "test.txt"), "12121", (err) => {
//   if (err) {
//     throw err;
//   }
// });

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "testData")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789"))
//   .catch((err) => console.log(err));

const text = process.env.TEXT;

writeFileAsync(path.resolve(__dirname, "test.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, "count.txt"),
      `Number of words: ${count}`
    )
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "test.txt")));
