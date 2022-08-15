const TodoSchema = require('../models/schema.js')

//sending date for the index.ejs to render it on out html page
module.exports.index_control=(req,res)=>{
    TodoSchema.find({},(err,list_items)=>{
        if(err){
            console.log("Some error occurred in fetching the data");
            return;
        }
        // console.log(list_items);
        return res.render('index',{
            list:list_items
        })
    })
}




// id:list_items._id,
// ejs_description:list_items.Description,
// ejs_Category:list_items.Category,
// ejs_date:list_items.Due_Date