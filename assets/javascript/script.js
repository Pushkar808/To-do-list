//this script is used to get all the data from the html and send it to node js
const Description=document.getElementById('desc_input');
const Category=document.getElementById('Category_list');
const dueDate=document.getElementById('due-date');
const addTask=document.querySelector('#Add-task>button');
const deleteTask=document.querySelector('#Delete-task>button');

addTask.addEventListener('click',()=>{
    let data={
        desc:Description.value,
        category:Category.value,
        duedate:dueDate.value
    }
     // Creating a XHR object
     let xhr = new XMLHttpRequest();
     let url = "submit.php";
     
})