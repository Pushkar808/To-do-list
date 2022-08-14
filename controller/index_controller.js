const TodoSchema = require('../models/schema.js')
module.exports.index_control=(req,res)=>{
    TodoSchema.find({},(err,list_items)=>{
        if(err){
            console.log("Some error occurred in fetching the data");
            return;
        }
        return res.render('index',{
            id:list_items._id,
            ejs_description:list_items.Description,
            ejs_Category:list_items.Category,
            ejs_date:list_items.Due_Date
        })
    })
    res.render('index',{
            title:"SASSA"
    });
}