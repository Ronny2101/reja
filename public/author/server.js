const http = require("http");
const  mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://dilshoddaminov2121:Zza4FtRyNhoAE4wI@cluster0.hesqy.mongodb.net/REJA";

mongodb.connect(connectionString, {
        useNewUrlParser:true;
        useUnifiedTopology:true;
},
    (err,client) => {
        iff (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
            });
  
        }
    }

);


