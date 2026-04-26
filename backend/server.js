const app = require("./src/app.js")
const express = require("express")
require("dotenv").config()
const dbConnect =require("./src/db/dbConnect.js")

dbConnect()


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})