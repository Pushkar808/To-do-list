const express = require('express')
const router = express.Router();
const index_controller = require('../controller/index_controller')
const TodoSchema = require('../models/schema.js')//schema of our table or can say our DB refernce
const alert = require('alert')//for alert messages in node
console.log('router loaded');

//routing our '/' request to our index_controller
router.get('/', index_controller.index_control)

//add task router
router.get('/addtask', (req, res) => {
    //formatting date
    var todaydate = new Date();
    let date = new Date(req.query.dueDate);
    if (todaydate > date) {//if due date is smaller than today date
        alert("Due Date cannot be smaller than today's date");
        return res.redirect('back');
    }
    let MonthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let mm = MonthsName[date.getMonth()];
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    //inserting data to the mongo db specified in models/schema.js
    TodoSchema.create({
        Description: req.query.description,
        Category: req.query.category,
        Due_Date: mm + " " + dd + ", " + yyyy//making desired format of date 
    }, function (err, u) {
        if (err) {
            console.log("Some error:" + err)
            return;
        }
        console.log("data inserted to DB");
        return res.redirect('back');
    });
})


//delete task router
router.get('/delete', (req, res) => {
    //here the url has been made by the assets/javascript/script.js and redirect it to /delete/id=""&id=""
    let id = [];//so that for single id it behave as a single entity in foreach loop
    id.push(req.query.id);//pushing all the id's that are checked by the user
    if (id[0] == 'dummy') {//if no task was checked
        alert("There is no completed task");
        return res.redirect('back');
    }
    for (let eachid of id[0]) {
        console.log("OK", eachid);
        if (eachid != 'dummy') {//as dummy is only to make array no use to delete data in DB
            //finding and deleting the id
            TodoSchema.findByIdAndDelete(eachid, (err) => {
                if (err) {
                    console.log("Some error occurred in deleting");
                    return;
                }
            })
        }
    }
    //so that the back page will refresh itself before going back
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    return res.redirect('back');
    
})

module.exports = router;