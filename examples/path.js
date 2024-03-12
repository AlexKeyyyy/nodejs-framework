const path = require("path");

console.log("Path of way: ", path.join(__dirname, "first", "second", "third"));
console.log("Получить абсолютный путь", path.resolve("first", "second"));
const fullpath = path.resolve("first", "second.js");
console.log("Парсинг пути", path.parse(fullpath));
console.log("Separator in MacOS", path.sep);
console.log("Is path absolute? ", path.isAbsolute("first"));
console.log("Name of file: ", path.basename(fullpath));
console.log("File ext: ", path.extname(fullpath));

//------------------------------------
const siteURL = "http://localhost:8080/users?id=5123";

const url = new URL(siteURL);

console.log(url);
