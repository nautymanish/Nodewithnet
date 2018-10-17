var express = require("express");
var http = require("http");
var controllers = require("./controllers");

var app = express();
app.set("view engine", "vash");
controllers.init(app);
var server = http.createServer(app);

server.listen(7787);