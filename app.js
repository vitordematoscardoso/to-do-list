//DOM Elements
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

function addTodo(event){
    // prevent the form from submitting
    event.preventDefault();

    // add todo only when user enters something
    if(todoInput.value !== ''){
        // create wrapper div
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';

        // create list element
        const newTodo = document.createElement('li');
        newTodo.className = 'todo-item';
        newTodo.innerText = `${todoInput.value} - ${getCurrentDate()}`; // adiciona a data ao texto da tarefa

        // add that list element inside of wrapper div
        todoDiv.appendChild(newTodo);
        todoInput.value = '';

        // create complete task button
        const completedBtn = document.createElement('button');
        completedBtn.innerText = `✔️`;
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);

        // create trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerText = `❌`;
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);

        // Add wrapper div to ul
        todoList.appendChild(todoDiv);
    }
}

// function to get current date in the format "DD/MM/YYYY"
function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
}


function deleteTodo(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fade-away');

        todo.addEventListener('transitionend', e => {
            todo.remove();
        });
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        const todoItem = todo.querySelector('.todo-item');
        todoItem.classList.toggle('completed');

    }
}