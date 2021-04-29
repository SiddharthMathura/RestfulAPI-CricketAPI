
//conn.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cricketapi",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=> {
    console.log("connection to database is successfull.");
})
.catch((err)=> console.log("ERROR-no connection"));