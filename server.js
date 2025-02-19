console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

 

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2Session code 
//3Views code
app.set("views:","views");
app.set("view engine","ejs");

//4 Routing code 
app.get("/hello", function (req, res) {
    res.end(`<h1>HELLO WORLD</h1>`);
});

app.get("/gift", function (req, res) {
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (req,res) {
    console.log(`The server is running succesfully on port: ${PORT}`);
});