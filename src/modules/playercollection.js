const mongoose = require("mongoose");

const batSchema = new mongoose.Schema(
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
            default:"ODI Batting Rankings",
        },

    }
)

const bowlSchema = new mongoose.Schema(
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
            default:"ODI Bowling Rankings",
        },

    }
)

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

const Bat = new mongoose.model("Bat",batSchema);
const Bowl = new mongoose.model("Bowl",bowlSchema);
const Allrounder = new mongoose.model("Allrounder",allrounderSchema);

module.exports = Bat;
module.exports = Bowl;
module.exports = Allrounder;