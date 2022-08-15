const express = require('express')
const router = express.Router();
const index_controller = require('../controller/index_controller')
const TodoSchema = require('../models/schema.js')
console.log('router loaded');

//routing our '/' request to our index_controller
router.get('/', index_controller.index_control)

//add task router
router.get('/addtask', (req, res) => {
    //formatting date
    let date=new Date(req.query.dueDate);
    let MonthsName=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let mm=MonthsName[date.getMonth()];
    let dd=date.getDate();
    let yyyy=date.getFullYear();
    
    //inserting data to the mongo db specified in models/schema.js
    TodoSchema.create({
        Description: req.query.description,
        Category: req.query.category,
        Due_Date: mm+" "+dd+", "+yyyy
    }, function (err, u) {
        if (err) {
            console.log("Some error:" + err)
            return;
        }
        console.log("data inserted to DB");
        return res.redirect('back');
    });
})

module.exports = router;