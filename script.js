//* ToDo List script 

//! Elements Selectors
const addBtn = document.querySelector('.add-btn');
const inputText = document.querySelector('.note-input');
const todoList = document.querySelector('.todo-list');

//! Functions
//? Add Todo Div 
const addTodo = (e) => {
    // prevent submitting
    e.preventDefault();

    //? todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //? create li
    const newTodo = document.createElement("li");
    newTodo.innerText = inputText.value;
    // now put this 'li' inside 'todo div'
    todoDiv.appendChild(newTodo);

    //? Complete BTN
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    // now put this 'btn' inside 'todo div'
    todoDiv.appendChild(completeBtn);

    //? Trash BTN
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    // now put this 'btn' inside 'todo div'
    todoDiv.appendChild(trashBtn);

    //? Append 'todo' to 'todo-list' 
    todoList.appendChild(todoDiv);

    //? Clear todo-input value after adding the task
    inputText.value = "";
}

//? deleteCheck() function
const deleteCheck = (e) => {
    const item = e.target;

    // Delete
    if (item.classList[0] === "trash-btn") {
        // console.log("trash");
        const todo = item.parentElement;
        todo.remove();
        // Check    
    } else if (item.classList[0] === "complete-btn") {
        // console.log("check");
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        if (todo.classList.contains('completed')) {
            todo.style.color = 'var(--accent-color)';
        } else {
            todo.style.color = 'white';

        }
    }
}

//! Event Listners
//? Add Todo 
addBtn.addEventListener('click', addTodo);

//? Delete & Check  
todoList.addEventListener('click', deleteCheck);

