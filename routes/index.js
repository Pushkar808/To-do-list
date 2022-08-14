const express = require('express')
const router = express.Router();
const index_controller = require('../controller/index_controller')
const TodoSchema = require('../models/schema.js')
console.log('router loaded');

router.get('/', index_controller.index_control)
//add task router
router.get('/addtask', (req, res) => {
    TodoSchema.create({
        Description: req.query.description,
        Category: req.query.category,
        Due_Date: new Date(req.query.dueDate)
    }, function (err, u) {
        if (err) {
            console.log("Some error:" + err)
            return;
        }
        console.log("data inserted to DB");
        return res.redirect('back');
    });
})


router.get('/create', (req, res) => {
    TodoSchema.create({
        Description: "THIS IS SAMPLE DESCR",
        Category: "SAMPLE CATEGORY",
        Due_Date: "02/12/2020"
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