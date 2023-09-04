import Task from './task';

export default class TaskManager{

    constructor()
    {
        this.tasks = [];
    }

    updateDueDate(index, selectedDate)
    {
        this.tasks[index].dueDate = selectedDate;
    }

    //add task
    addTask(name, dueDate, checked)
    {
        const task = new Task(name, dueDate, checked);
        this.tasks.push(task);
    }

    //delete task

    deleteTask(index)
    {
        this.tasks.splice(index, 1);
    }


    //generate task html
    generateHTML(task,index)
    {
        const taskdiv = document.createElement('button');
        taskdiv.classList.add('task');

        taskdiv.innerHTML = `<div class="left">
        <input type="checkbox" class="check" ${task.checked ? 'checked' : ''} data-task-id="${index}" >
        <p class="textContent ${task.checked ? 'striked' : ''}">${task.name}</p>
        </div>
        <div class="right">
            <p class="dueDate">${task.dueDate}</p>
            <input type="date" class="date"  data-task-id="${index}">
            <span style="margin-left: 10px; font-size: 1.4em; cursor:pointer;" class="closebtn" data-task-id="${index}">&times;</span>
        </div>`;

        return taskdiv;
    }


    //display tasks 
    displayTasks()
    {
        let tasklist = document.querySelector('.tasklist');
        tasklist.innerHTML = '';
        this.tasks.forEach((task, index)=>
        {
            const htmltask = this.generateHTML(task, index);
            tasklist.appendChild(htmltask);
        });
    } 

    //check tasks
    checkTask(index)
    {
        if(this.tasks[index].checked === true)
        {
            this.tasks[index].checked = false;
        }
        else if(this.tasks[index].checked === false)
        {
            this.tasks[index].checked = true;
        }
        
    }

    //display tday tasks

    displayTodayTasks()
    {
        let currentDate = new Date().toJSON().slice(0, 10);
         // "2022-06-17"

        let todaytasklist = document.querySelector('.todaytasklist');
        todaytasklist.innerHTML = '';
        this.tasks.forEach((task, index)=>{
            if(task.dueDate === currentDate )
            {
                const htmltask = this.generateHTML(task, index);
                todaytasklist.appendChild(htmltask);
            }
        });
    }

    //display week tasks

    displayWeekTasks()
    {
        let startOfWeek = new Date();

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 7);

        const formattedStartOfWeek = startOfWeek.toISOString().slice(0, 10);
        const formattedEndOfWeek = endOfWeek.toISOString().slice(0, 10);

        console.log(formattedStartOfWeek);
        console.log(formattedEndOfWeek);

        let weektasklist = document.querySelector('.weektasklist');
        weektasklist.innerHTML = '';

        this.tasks.forEach((task, index)=>{
           if(task.dueDate >= formattedStartOfWeek && task.dueDate <= formattedEndOfWeek)
            {
                const htmltask = this.generateHTML(task, index);
                weektasklist.appendChild(htmltask);
            }
        });
    }

    //local storage
    saveToLocalStorage() 
    {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadFromLocalStorage() 
    {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

}