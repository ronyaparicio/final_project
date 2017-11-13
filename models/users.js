const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:string, required: true },
    lastName: {type:string, required: true },
    email: {type:string, required: true, unique: true },
    password: {type:string, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;

