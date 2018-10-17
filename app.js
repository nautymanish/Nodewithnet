var express = require("express");
var http = require("http");


var app = express();
app.set("view engine", "vash");
app.get("/", function(req, res)
{
res.send('<html><title>FU U!</title><body>Hello there</body></html>');
});
var server = http.createServer(app);

server.listen(7787);