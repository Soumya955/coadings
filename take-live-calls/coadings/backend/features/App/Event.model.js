const mongoose = require("mongoose");

const eventData = new mongoose.Schema({
    name:String,
    description:String,
    date:Date,
    sport:String,
    limit:Number,
    members:[{type:mongoose.Schema.Types.ObjectId}],
    requests:[{type:mongoose.Schema.Types.ObjectId}],
    userid: {type:mongoose.Schema.Types.ObjectId}
})



const eventModel = mongoose.model("event",eventData);
module.exports = eventModel