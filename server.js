//console.log("Web serverni boshlash");
// const express = require("express");
// const app = express();
// const http = require("http");

 

// //1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// //2Session code 
// //3Views code
// app.set("views:","views");
// app.set("view engine","ejs");

// //4 Routing code 
// app.get("/hello", function (req, res) {
//     res.end(`<h1>HELLO WORLD</h1>`);
// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//     console.log(`The server is running succesfully on port: ${PORT}`);
// });



console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");
const http = require("http");
//const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");

let user;
// fs.readFile("database/user.json", "utf8",(err,data) => {
//     if(err) {
//         console.log("ERROR",err);
//     } else{
//         user = JSON.parse(data)
//     }
// });
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.error("Fayl o‘qishda xatolik:", err);
        return;
    }
    try {
        user = JSON.parse(data);
        console.log("User ma’lumoti:", user);
    } catch (error) {
        console.error("JSON parse xatosi:", error);
    }
});

 

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//2Session code 
//3Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//4 
app.post("/create-item", (req, res) => {
    //TODO: code with db here
});

app.get("/author", (req, res) => {
   // res.send("Hello Author");
    res.render("author",{user: user });
});

app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});