const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/todo_list")
const db=mongoose.connection;

db.on('error', err => {logError(err);});
db.once('open',()=>{
    console.log("Connected succesfully to Mongo");
})