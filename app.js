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
fs.readFile("database/user.json", "utf8",(err,data) => {
     if(err) {
         console.log("ERROR",err);
     } else{
         user = JSON.parse(data)
     }
 });
  
//MongoDb connect
const db = require("./server").db();

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
     console.log(req.body);
     const new_reja = req.body.reja;
      db.collection("plans").insertOne({reja: new_reja}, (err, data)  => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("succesfully added");
        }
      })
});

// app.get("/author", (req, res) => {
//    // res.send("Hello Author");
//     res.render("author",{ user: user });
// });

app.get("/", function (req, res) {
    console.log("user entered/");
    db.collection("plans")
    .find()
    .toArray(err,data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja",{items:data});
              
        }
    }
    
});


 module.exports = app;