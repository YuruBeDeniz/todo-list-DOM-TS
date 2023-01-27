import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem)
//create a local storage to save all the info so we can access the info later

form?.addEventListener('submit', e => {
  e.preventDefault();

  if(input?.value == '' || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  saveTasks();

  addListItem(newTask);
  input.value = '';
})


function addListItem(task: Task) {
   const item = document.createElement('li');
   const label = document.createElement('label');
   const checkbox = document.createElement('input');
   checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked; 
    //every time we change out checknoz it's going to change the completed flag in our task 
    console.log(tasks);
    saveTasks(); 
    //to save tasks and get them out of local storage
   })
   checkbox.type = 'checkbox';
   checkbox.checked = task.completed;
   label.append(checkbox, task.title);
   item.append(label);
   list?.append(item);
};

function saveTasks () {
   localStorage.setItem('TASKS', JSON.stringify(tasks));
};

function loadTasks (): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if (taskJSON == null) return [];
  //we did the above as JSON.parse only accepts string not null
  return JSON.parse(taskJSON);
}