console.log("JS LOADED")

const delete_button = document.querySelector('#Delete-task button');//delete button

function getCompletedTask() {//function to get all the tasks that has been checked by the user
    var CompletedTasks = [];
    const Tasks = document.querySelectorAll('#todo-checkbox input');
    console.log(Tasks)
    for (let i = 0; i < Tasks.length; i++) {  
        let checkedtask = Tasks[i];
        if (checkedtask.checked)//getting tasks that are only completed 
        {
            let checkedTaskID=Tasks[i].getAttribute("name");//pushing id to as we had
            CompletedTasks.push(checkedTaskID);//mentioned name="unique_id"
       }
    }
    return CompletedTasks;
}

delete_button.addEventListener('click', () => {
   const CompletedTasks=getCompletedTask(); //geting completed tasks
   //here we are using dummy so that it always comes like [['dummy',id1,id2..]] as for 1 value it sent only value not as an array 
   //we can also use it to see whether nothing was selected or not
   let url="/delete/?id=dummy&"//redirecting url to /delete
   for(let eachTask of CompletedTasks){
        url+="id="+eachTask+"&"; //adding variables inside the url
   }
   location.href=url;//setting href location to redirect it to /delete/&id="id1"&...
});
