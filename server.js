var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);
});



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BuddyCab');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var subscriberSchema = mongoose.Schema({
    name: String,
    sirname: String,
    phone: Number,
    avatar: String
});

var Subscriber = mongoose.model('Subscriber', subscriberSchema);

Subscriber.find(function (err, subscribers) {
  if (err) return console.error(err);
  console.log(subscribers);
});


// // var mongojs = require('mongojs');
// // var db = mongojs('BuddyCab', ['BuddyCab']);

app.get("/api/subscribers", function(req, res) {
   Subscriber.find(function(err, subscribers){
   	console.log(subscribers)
   	res.json(subscribers);
   });

//    // db.BuddyCab.find(function(req, users){
//    // 		console.log(users);
//    // 		res.json(users);
//    // });
//    // to insert
});

var bodyParser = require('body-parser')
app.use(bodyParser());

// var notes = require('./notes');
// var categories = notes.data.categories;
// notes = notes.data.notes;
// var fs = require("fs");
// var notes = fs.readFileSync("notes.json");
// var jsonNotes = JSON.parse(notes);


/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});

app.get("/notes/:id", function(req, res) {
	var note = notes.filter(function(note) { return note.id == req.params.id; })[0];
	
	if(!note) {
        res.statusCode = 404;
        return res.json({ msg: "note does not exist" });
    }

	res.json(note);
});

app.post('/notes', function(req, res) {
    var newNote = {
        name : req.body.name,
        body : req.body.body,
        id: notes.length,
        categoryId: req.body.categoryId
    };

    notes.push(newNote);
    
    setTimeout(function(){
    	res.json(newNote);
    }, 1000);
});

app.put("/notes/:id", function(req, res) {
	var note = notes.filter(function(note) { return note.id == req.params.id; })[0];
	if(!note) {
        res.statusCode = 404;
        return res.json({ msg: "note does not exist" });
    }

    note.name = req.body.name;
    note.body = req.body.body;
    note.categoryId = req.body.categoryId;

    setTimeout(function(){
    	res.json(note);
    }, 1000);
});

app.get("/notes", function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.json(notes);
});

app.get("/categories", function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.json(categories);
});

app.delete('/notes/:id', function(req, res) {
	var note = notes.filter(function(book) { return book.id == req.params.id; })[0];
	if(!note) {
        res.statusCode = 404;
        return res.json({ msg: "note does not exist" });
    }

    notes.splice(notes.indexOf(note), 1);

    res.statusCode = 204;
    
    setTimeout(function(){
    	res.send({});
    }, 1000);
});
/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});
 