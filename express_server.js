let express = require("express");
let router = express.Router();

let app = express();

app.use(express.static(__dirname));

router.get("/login", (req, res)=> {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello login page");
});

app.use("/", router);

app.listen(8090);