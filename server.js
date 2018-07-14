const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// 
// var path = require("path");
// const routes = require("./routes");

// models
// var db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("express-session")({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both APIs and view
const routes = require("./routes/auth-api");
const art_routes = require("./routes/art-api");
const collections_routes = require("./routes/collectionRoute");

app.use(routes);
app.use(art_routes);
app.use(collections_routes);


// 



// passport config
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passportdb");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log(`🌎  ==> http://localhost:${PORT}`);
});



// app.use(express.session({ 
//     store: new mongoStore({url:process.env.MONGOLAB_URI}),
//     maxAge: 300000,
//     secret: process.env.COOKIEHASH
//   })
// );