const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
