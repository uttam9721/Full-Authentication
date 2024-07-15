const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.01:27017/aauthapp`);

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
});
 
module.exports=mongoose.model("User",userSchema);