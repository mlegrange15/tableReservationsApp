// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DATA
// =============================================================
var tables = [
    {
      customerEmail: "test@email.com",
      custmerId: "12345",
      customerName: "Batman",
      phoneNumber: "1-800-899-0000"
    }
  ];

  var waitlist = [
    // {
    //   customerEmail: "test@email.com",
    //   custmerId: "12345",
    //   customerName: "Batman",
    //   phoneNumber: "1-800-899-0000"
    // }
  ];


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  // Displays all reservations
app.get("/view/tables", function(req, res) {
console.log('working');
console.log(res);

    return res.json(tables);
  });

  // Create New reservation - takes in JSON input
app.post("/add/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;

        tables.push(newTable);
      
        res.json(newTable); 
  });


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });