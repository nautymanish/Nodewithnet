var express = require("express");
var http = require("http");
var controllers = require("./controllers");

var app = express();
app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));// dirname is root of node and this is used to add public folders
controllers.init(app);
var server = http.createServer(app);

server.listen(7787);