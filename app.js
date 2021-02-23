const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/app");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to WouaLabs application." });
});

require("./src/services/user_services")(app);

const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});








// var mangoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// // var uc = require('upper-case');
// // var dt = require('./datefield')
// // var fs = require('fs');
// // //create a server object:
// // http.createServer(function (req, res) {
// //     res.writeHead(200, { 'Content-Type': 'text/plain' });
// //     res.write('Suresh Woua Labs' + dt.myDateTime());
// //     // fs.writeFile('newfile.txt',"hello");
// //     res.end();

// // }).listen(8080);

// // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   });

// // fs.open('mynewfile1.txt', 'w', function (err, file) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   });

//     ///Database Created

// // mangoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
// //     if (err) throw err;
// //     console.log("Database created!");
// //     db.close();
// // });

//     /// Insert

// mangoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbcus = db.db("mydb");
//     var myobj = { name: "suresh", mobile: "9361439804", email: "suresh@gmail" };
//     dbcus.collection("WOUA").insertOne(myobj, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, res) {
//         if (err) throw err;
//         console.log("document inserted");
//         db.close();
//     });
// });

//       ///FindAll

// // mangoClient.connect(url, function (err, db) {
// //     if (err) throw err;
// //     var dbcus = db.db("mydb");
// //     dbcus.collection("WOUA").find({}).toArray(function (err, res) {
// //         if (err) throw err;
// //         console.log("result", res);
// //         db.close();
// //     });
// // });

//        ///update

// // mangoClient.connect(url, function (err, db) {
// //     if (err) throw err;

// //     var dbcus = db.db("mydb");
// //     var myq = { name: "sureshWoua" }
// //     var newValue = { $set: { name: "sureshWouaLabs" } };
// //     dbcus.collection("WOUA").updateOne(myq, newValue, function (err, res) {
// //         if (err) throw err;
// //         console.log("result", res.result.nModified);
// //         db.close();
// //     });


// // });

//         // Delete

// // mangoClient.connect(url, function (err, db) {
// //     if (err) throw err;

// //     var dbcus = db.db("mydb");
// //     var myq = { name: "suresh" }
  
// //     dbcus.collection("WOUA").deleteOne(myq,  function (err, res) {
// //         if (err) throw err;
// //         console.log("result deleted");
// //         db.close();
// //     });


// // });


