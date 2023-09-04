
export function createInboxPageContent()
{

//date toggle
let date = document.querySelector('.date');


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('dueDate')) 
    {
        event.target.classList.add('active');
        const container = event.target.closest('.right');
        if (container) {
            const inputdate = container.querySelector('.date');
            if (inputdate) 
            {
                inputdate.classList.add('active');
            }
        }
    }
    
});


function toggleDate()
{
    console.log('hi');
}

//nav toggle
let menubtn = document.querySelector('.menu');
let nav = document.querySelector('.nav');

menubtn.addEventListener('click', function()
{
    if(nav.classList.contains('active'))
    {
        nav.classList.remove('active');
    }
    else{
        nav.classList.add('active');
    }
  
});

// add task toggle

let addtaskbtn = document.querySelector('.addtaskbtn');
let addtaskpopup = document.querySelector('.addtaskpopup');
let cancletask = document.querySelector('.cancleTask');
let addtaskinput = document.querySelector('.addtaskinput');

addtaskbtn.addEventListener('click', function()
{
    addtaskpopup.classList.add('active'); //display block
    addtaskbtn.classList.add('active'); //display none
});


cancletask.addEventListener('click', function()
{
    addtaskpopup.classList.remove('active');
    addtaskbtn.classList.remove('active');
    addtaskinput.value = '';

});


// add project btn toggle

let addproject = document.querySelector('.addproject');
let newproject = document.querySelector('.newproject');
let cancle = document.querySelector('.cancle');
let projectinput = document.querySelector('.projectinput');

addproject.addEventListener('click', function()
{
    newproject.classList.add('active');
    addproject.classList.add('active');

});

cancle.addEventListener('click', function()
{
    newproject.classList.remove('active');
    addproject.classList.remove('active');
    projectinput.value = '';
});

// // adding task
// let addTaskbtn = document.querySelector('.addTask');

// addTaskbtn.addEventListener('click', function()
// {
//     let taskinputname = addtaskinput.value;
//     taskManager.addTask(taskinputname);
   
//     taskManager.displayTasks();

//     addtaskpopup.classList.remove('active');
//     addtaskbtn.classList.remove('active');
//     addtaskinput.value = '';
   
//     console.log(taskManager.tasks);
    
// });

//deleting task
// const closebtn = document.querySelector('.closebtn');

// document.addEventListener('click', (event)=>
// {
//     if(event.target.classList.contains('closebtn'))
//     {
//         let index = event.target.dataset.taskId;
//         taskManager.deleteTask(index);
//         taskManager.displayTasks();
//     }
    
// });

// document.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('check'))
//     {
//         let index = event.target.dataset.taskId;
//         taskManager.checkTask(index);
//         taskManager.displayTasks();
//     }
// });
}
