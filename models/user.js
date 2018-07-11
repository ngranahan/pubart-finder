const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    body: {
    username: String,
    password: String,
    },

    saved: {
        type: Boolean,
        default: false
      },
      
    collections: [{
        type: Schema.Types.ObjectId,
        ref: "Collections"
     }]
});

UserSchema.plugin(passportLocalMongoose);

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;


