(()=>{"use strict";class e{constructor(e,t="no date",s=!1){this.name=e,this.dueDate=t,this.checked=s}}const t=new class{constructor(){this.tasks=[]}updateDueDate(e,t){this.tasks[e].dueDate=t}addTask(t,s,a){const c=new e(t,s,a);this.tasks.push(c)}deleteTask(e){this.tasks.splice(e,1)}generateHTML(e,t){const s=document.createElement("button");return s.classList.add("task"),s.innerHTML=`<div class="left">\n        <input type="checkbox" class="check" ${e.checked?"checked":""} data-task-id="${t}" >\n        <p class="textContent ${e.checked?"striked":""}">${e.name}</p>\n        </div>\n        <div class="right">\n            <p class="dueDate">${e.dueDate}</p>\n            <input type="date" class="date"  data-task-id="${t}">\n            <span style="margin-left: 10px; font-size: 1.4em; cursor:pointer;" class="closebtn" data-task-id="${t}">&times;</span>\n        </div>`,s}displayTasks(){let e=document.querySelector(".tasklist");e.innerHTML="",this.tasks.forEach(((t,s)=>{const a=this.generateHTML(t,s);e.appendChild(a)}))}checkTask(e){!0===this.tasks[e].checked?this.tasks[e].checked=!1:!1===this.tasks[e].checked&&(this.tasks[e].checked=!0)}displayTodayTasks(){let e=(new Date).toJSON().slice(0,10),t=document.querySelector(".todaytasklist");t.innerHTML="",this.tasks.forEach(((s,a)=>{if(s.dueDate===e){const e=this.generateHTML(s,a);t.appendChild(e)}}))}displayWeekTasks(){let e=new Date;const t=new Date(e);t.setDate(e.getDate()+7);const s=e.toISOString().slice(0,10),a=t.toISOString().slice(0,10);console.log(s),console.log(a);let c=document.querySelector(".weektasklist");c.innerHTML="",this.tasks.forEach(((e,t)=>{if(e.dueDate>=s&&e.dueDate<=a){const s=this.generateHTML(e,t);c.appendChild(s)}}))}saveToLocalStorage(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}loadFromLocalStorage(){const e=localStorage.getItem("tasks");e&&(this.tasks=JSON.parse(e))}};document.addEventListener("DOMContentLoaded",(function(){t.loadFromLocalStorage();let e=document.querySelector(".todaybtn"),s=document.querySelector(".inboxbtn"),a=document.querySelector(".weekbtn");function c(){e.classList.remove("selected-button"),s.classList.remove("selected-button"),a.classList.remove("selected-button")}let o=document.querySelector(".inboxContent"),d=document.querySelector(".todayContent"),n=document.querySelector(".weekContent");function l(){o.style.display="none",d.style.display="none",n.style.display="none"}l(),function(){document.querySelector(".date"),document.addEventListener("click",(e=>{if(e.target.classList.contains("dueDate")){e.target.classList.add("active");const t=e.target.closest(".right");if(t){const e=t.querySelector(".date");e&&e.classList.add("active")}}}));let e=document.querySelector(".menu"),t=document.querySelector(".nav");e.addEventListener("click",(function(){t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}));let s=document.querySelector(".addtaskbtn"),a=document.querySelector(".addtaskpopup"),c=document.querySelector(".cancleTask"),o=document.querySelector(".addtaskinput");s.addEventListener("click",(function(){a.classList.add("active"),s.classList.add("active")})),c.addEventListener("click",(function(){a.classList.remove("active"),s.classList.remove("active"),o.value=""}));let d=document.querySelector(".addproject"),n=document.querySelector(".newproject"),l=document.querySelector(".cancle"),i=document.querySelector(".projectinput");d.addEventListener("click",(function(){n.classList.add("active"),d.classList.add("active")})),l.addEventListener("click",(function(){n.classList.remove("active"),d.classList.remove("active"),i.value=""}))}(),e.addEventListener("click",(function(){c(),e.classList.add("selected-button"),l(),d.style.display="block",t.displayTodayTasks()})),s.addEventListener("click",(function(){c(),s.classList.add("selected-button"),l(),o.style.display="block",t.displayTasks()})),a.addEventListener("click",(function(){c(),a.classList.add("selected-button"),l(),n.style.display="block",t.displayWeekTasks()})),document.addEventListener("change",(e=>{if(e.target.classList.contains("date")){let s=e.target.dataset.taskId;const a=e.target.value;t.updateDueDate(s,a),t.saveToLocalStorage(),t.loadFromLocalStorage(),t.displayTasks(),t.displayTodayTasks(),t.displayWeekTasks()}}));let i=document.querySelector(".addTask"),r=document.querySelector(".addtaskbtn"),u=document.querySelector(".addtaskinput"),k=document.querySelector(".addtaskpopup");i.addEventListener("click",(function(){let e=u.value;t.addTask(e),t.saveToLocalStorage(),t.loadFromLocalStorage(),t.displayTasks(),t.displayTodayTasks(),t.displayWeekTasks(),k.classList.remove("active"),r.classList.remove("active"),u.value="",console.log(t.tasks)})),document.querySelector(".closebtn"),document.addEventListener("click",(e=>{if(e.target.classList.contains("closebtn")){let s=e.target.dataset.taskId;t.deleteTask(s),t.saveToLocalStorage(),t.loadFromLocalStorage(),t.displayTasks(),t.displayTodayTasks(),t.displayWeekTasks()}})),document.addEventListener("click",(e=>{if(e.target.classList.contains("check")){let s=e.target.dataset.taskId;t.checkTask(s),t.saveToLocalStorage(),t.loadFromLocalStorage(),t.displayTasks(),t.displayTodayTasks(),t.displayWeekTasks()}})),s.click()}))})();