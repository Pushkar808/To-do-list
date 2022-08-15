const mongoose=require('mongoose');
//specifying schema for out DB
const TodoSchema=new mongoose.Schema({
    //Description of task
    Description:{
        type:String,
        required:true
    },
    //Category selected by user
    Category:{
        type:String,
        required:true
    },
    //Due date for the user
    Due_Date:{
        type:String,/*so that we can store date easily without time stamp*/
        required:true
    }
});
//using the schema for out ToDoList named DB
const Todo=mongoose.model('ToDoList',TodoSchema);
module.exports=Todo;