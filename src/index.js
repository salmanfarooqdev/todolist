import TaskManager from './taskmanager';
import { createInboxPageContent } from './inbox';
const taskManager = new TaskManager();

document.addEventListener('DOMContentLoaded', function() 
{
    
    taskManager.loadFromLocalStorage();

    let todaybtn = document.querySelector('.todaybtn');
    let inboxbtn = document.querySelector('.inboxbtn');
    let weekbtn = document.querySelector('.weekbtn');

    function clearSelected() {
        todaybtn.classList.remove('selected-button');
        inboxbtn.classList.remove('selected-button');
        weekbtn.classList.remove('selected-button');
    }

    let inboxContent = document.querySelector('.inboxContent');
    let todayContent = document.querySelector('.todayContent');
    let weekContent = document.querySelector('.weekContent');

    function hideAll()
    {
        inboxContent.style.display = 'none';
        todayContent.style.display = 'none';
        weekContent.style.display = 'none';
    }
    hideAll();
    createInboxPageContent();
    

todaybtn.addEventListener('click', function()
{
    clearSelected(); // Remove the class from all buttons
    todaybtn.classList.add('selected-button');
    hideAll();
    todayContent.style.display = 'block';
    taskManager.displayTodayTasks();
});

inboxbtn.addEventListener('click', function()
{
    clearSelected();
    inboxbtn.classList.add('selected-button');
    hideAll();
    inboxContent.style.display = 'block';

    taskManager.displayTasks();

   
});

weekbtn.addEventListener('click', function()
{
    clearSelected();
    weekbtn.classList.add('selected-button');
    hideAll();
    weekContent.style.display = 'block';
    taskManager.displayWeekTasks();
});



document.addEventListener('change', (event)=>{
    if(event.target.classList.contains('date'))
    {
        let index = event.target.dataset.taskId;
        const selectedDate = event.target.value;

        taskManager.updateDueDate(index, selectedDate);

        taskManager.saveToLocalStorage();
        taskManager.loadFromLocalStorage();

        taskManager.displayTasks();
        taskManager.displayTodayTasks();
        taskManager.displayWeekTasks();

    }
});

// adding task
let addTaskbtn = document.querySelector('.addTask');
let addtaskbtn = document.querySelector('.addtaskbtn');
let addtaskinput = document.querySelector('.addtaskinput');
let addtaskpopup = document.querySelector('.addtaskpopup');


addTaskbtn.addEventListener('click', function()
{
    let taskinputname = addtaskinput.value;
    taskManager.addTask(taskinputname);

    taskManager.saveToLocalStorage();
    taskManager.loadFromLocalStorage();
   
    taskManager.displayTasks();
    taskManager.displayTodayTasks();
    taskManager.displayWeekTasks();

    addtaskpopup.classList.remove('active');
    addtaskbtn.classList.remove('active');
    addtaskinput.value = '';
   
    console.log(taskManager.tasks);
    
});

// deleting task
const closebtn = document.querySelector('.closebtn');

document.addEventListener('click', (event)=>
{
    if(event.target.classList.contains('closebtn'))
    {
        let index = event.target.dataset.taskId;
        taskManager.deleteTask(index);

        taskManager.saveToLocalStorage();
        taskManager.loadFromLocalStorage();

        taskManager.displayTasks();
        taskManager.displayTodayTasks();
        taskManager.displayWeekTasks();

    }
    
});

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('check'))
    {
        let index = event.target.dataset.taskId;
        taskManager.checkTask(index);

        taskManager.saveToLocalStorage();
        taskManager.loadFromLocalStorage();

        taskManager.displayTasks();
        taskManager.displayTodayTasks();
        taskManager.displayWeekTasks();
     
    }
});

inboxbtn.click();

});





