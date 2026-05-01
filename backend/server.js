const app = require("./src/app.js");
// const express = require("express")
require("dotenv").config();
const dbConnect = require("./src/db/dbConnect.js");
const { server } = require("./src/lib/socket.js");

dbConnect();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
