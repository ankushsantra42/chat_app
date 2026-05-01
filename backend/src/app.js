// const express = require("express")
// const app = express()
const { app } = require("./lib/socket.js");
const { ENV } = require("./lib/env.js");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const express = require("express");


app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}))

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Import routes
const authRouter = require("./routes/auth.route");
const messageRouter = require("./routes/message.route");

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

module.exports = app;
