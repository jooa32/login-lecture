"use strict";
//메인파일 
//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
//라우팅

app.use("/", home); //use -> 미들웨어 등록



module.exports = app;