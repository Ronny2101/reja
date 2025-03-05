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



// console.log("Web serverni boshlash");
// const express = require("express");
// const app = express();
// const res = require("express/lib/response");
// const http = require("http");
// //const res = require("express/lib/response");
// const fs = require("fs");
// const path = require("path");
 

// let user;
// fs.readFile("database/user.json", "utf8",(err,data) => {
//      if(err) {
//          console.log("ERROR",err);
//      } else{
//          user = JSON.parse(data)
//      }
//  });
  
// //MongoDb connect
// const db = require("./server").db();
// const mongodb =require("mongodb");

// //1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

// //2Session code 
// //3Views code
// // app.set("views", "views");
// // app.set("view engine", "ejs");

 
//  app.set("views", path.join(__dirname, "views"));
//  app.set("view engine", "ejs");

// 4 
// app.post("/create-item", (req, res) => {
//     console.log("user entered /create-item");
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data)  => {
//         res.json(data.ops[0]);
//     });
// });

// // app.get("/author", (req, res) => {
// //    // res.send("Hello Author");
// //     res.render("author",{ user: user });
// // });
// app.post("/delete-item", (req, res)  => {
//     const id = req.body.id;
//     db.collection("plans").deleteOne(
//         { _id: new mongodb.ObjectId(id) },
//         function (err, data) {
//          res.json({state: "succes"});
//         }
//     );
// });
 



// app.get("/", function (req, res) {
//     console.log("user entered /");
//     db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//         if (err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             res.render("reja", {items: data});
              
//         }
//     });
    
// });


//  module.exports = app;



console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 Session
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");
// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    {$set: {reja: data.new_input } },
     function(err, data ) {
      res.json({state: "succes"});
    }
  );
});
 
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state:"Hamma rejalar o'chirildi"});
    })
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;