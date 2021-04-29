const mongoose = require("mongoose");

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


const Bowl = new mongoose.model("Bowl",bowlSchema);

module.exports = Bowl;
