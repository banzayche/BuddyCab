var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);
});
var bodyParser = require('body-parser');
app.use(bodyParser());


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BuddyCab');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!");
});

// schema of model
var subscriberSchema = mongoose.Schema({
    name: String,
    sirname: String,
    phone: Number,
    avatar: String,
    id: Number
});

var Subscriber = mongoose.model('Subscriber', subscriberSchema);
var subscribersId = 0;
// Subscriber.find(function (err, subscribers) {
//   if (err) return console.error(err);  
//   console.log(subscribers);
// });

/* serves main page */
app.get("/", function(req, res) {
   res.sendfile('public/index.html')
});
// GET ALL SUBSCRIBERS
app.get("/api/subscribers", function(req, res) {
   Subscriber.find(function(err, subscribers){
    console.log(subscribers)
    res.json(subscribers);
   });
});
// GET ITEM SUBSCRIBER
app.get("/api/subscribers/:item", function(req, res) {
    var ID = +(req.params.item);
    console.log(req.params.item);
    Subscriber.find( { id: ID }, function(err, subscribers){
        console.log(subscribers)
        res.json(subscribers);
    });
});
// CREATE NEW
app.post("/api/subscribers/new", function(req, res) {
    console.log('new');
    console.log(req.body);
    Subscriber.find(function (err, subscribers) {
      if (err) return console.error(err);
      // get new ID
      subscribersId = +subscribers[subscribers.length-1].id+1;
      // create new subscriber
      var newUser = new Subscriber({
            name: req.body.name,
            sirname: req.body.sirname,
            phone: +req.body.phone,
            avatar: req.body.avatar,
            id: +subscribersId
        });

        newUser.save(function(err) {
            if (err) throw err;

            console.log('User saved successfully!');
            res.json(newUser);
        });
    }); 
});
// CHANGE ITEM SUBSCRIBER
app.put("/api/subscribers/:item", function(req, res){
    var ID = +(req.params.item);
    console.log(typeof ID);
    Subscriber.findOne( { id: ID }, function(err, subscriber){
        if (err) throw err;

        console.log(subscriber)
        subscriber.name = req.body.name;
        subscriber.sirname = req.body.sirname;
        subscriber.phone = +req.body.phone;
        subscriber.avatar = req.body.avatar;

        // save the user
        subscriber.save(function(err) {
            if (err) throw err;

            console.log('User successfully updated!');
            res.json(subscriber);
        });
    });
});
// DELETE ITEM SUBSCRIBER
app.delete("/api/subscribers/remove/:item", function(req, res) {
    var ID = +(req.params.item);
    console.log(typeof ID);
    Subscriber.findOne( { id: ID }, function(err, subscriber){
        console.log(subscriber)
        subscriber.remove(function(err) {
            if (err) throw err;

            console.log('User successfully deleted!');
            res.send('200');
        });
    });
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    // console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});
 