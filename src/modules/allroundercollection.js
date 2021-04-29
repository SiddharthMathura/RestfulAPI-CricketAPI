const mongoose = require("mongoose");

const allrounderSchema = new mongoose.Schema(
    {
        ranking:{
            type:Number,
            unique: true,
            required:true
        },
        player:{
            type:String,
            required:true,
            trim:true
        },
        team:{
            type:String,
            required:true,
            trim:true
        },
        rating:{
            type:Number,
            required:true,
            trim:true
        },
        event:{
            type:String,
            default:"ODI All-Rounders Rankings",
        },

    }
)
const Allrounder = new mongoose.model("Allrounder",allrounderSchema);


module.exports = Allrounder;