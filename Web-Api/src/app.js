//Configuration for run the Web Server

//import libs

var port = process.env.port || 3000;

const http = require("http");
const express = require("express");

//Basic Configuration

const hostname = "127.0.0.1";

//Initialize the server
const app = express();

//Set the port e use the configuration server

app.set("port", port);

app.use(

    (req, resp, next) => {

        resp.status(200).send("TESTE");

    }
);

//Build the server

const server = http.createServer(app);

app.listen(

    port, () => {

        console.log("Server listening in the http://localhost:8081");

    }
);
