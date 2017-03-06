let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hiiiii~~");
}).listen(8090, "0.0.0.0");

console.log("simple http server started");