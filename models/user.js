const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    }
    //name password ko passportLocalMongoose automatically define kr deta hai
});

userSchema.plugin(passportLocalMongoose); //automatically add username pass salting hashpassword
module.exports = mongoose.model('User',userSchema);
