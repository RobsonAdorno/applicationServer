const http = require("http");
const express = require("express");

const port = process.env.PORT || 8081;
const hostname = "127.0.0.1";

const app = express();

app.set("port", port);

app.use((req, resp, next) => {

  resp.status(200).send("Caralho mano, eh isso msm!!")

});

const server = http.createServer(app);

server.listen( port, hostname, () => {

  console.log("Servidor ouvindo em http://localhost:8081");
}
);