const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Due_Date:{
        type:Date,
        required:true
    }
});

const Todo=mongoose.model('ToDoList',TodoSchema);
module.exports=Todo;