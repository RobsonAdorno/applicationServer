const http = require("http");
const local = ("127.0.0.1");
const port = ("8081")

//Arrow Function =>

const server = http.createServer(
    (req, res) => {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello Word");

    }
);

server.listen(port, local, () => {

    console.log("Servidor ouvindo no http://localhost:8081");
}



);