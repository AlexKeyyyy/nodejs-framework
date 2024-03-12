const crypto = require("crypto");

const start = Date.now();
// показываем что в libuv 4 потока с неблокирующим вводом/выводом

crypto.pbkdf2("1223ff", "5", 1000000, 64, "sha512", () => {
  console.log("1 end ", Date.now() - start);
});

crypto.pbkdf2("1223ff", "5", 1000000, 64, "sha512", () => {
  console.log("2 end ", Date.now() - start);
});

crypto.pbkdf2("1223ff", "5", 1000000, 64, "sha512", () => {
  console.log("3 end ", Date.now() - start);
});

crypto.pbkdf2("1223ff", "5", 1000000, 64, "sha512", () => {
  console.log("4 end ", Date.now() - start);
});

crypto.pbkdf2("1223ff", "5", 1000000, 64, "sha512", () => {
  console.log("5 end ", Date.now() - start);
});
