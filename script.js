//* ToDo List script 

//! Elements Selectors
const addBtn = document.querySelector('.add-btn');
const inputText = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

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

    //? Add todo to local storage
    // saveToLocal(inputText.value); 

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
        // if (todo.classList.contains('completed')) {
        //     todo.style.color = 'var(--accent-color)';
        // } else {
        //     todo.style.color = 'white';
        // }
    }
}


//? Filter Function
const filterTodo = (e) => {

    // Select all todo elements
    const todos = todoList.querySelectorAll('.todo');
    // console.log(todos);

    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;

            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            case "incomplete":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

//? Save TodoList to Local Storage
// const saveToLocal = (todo) =>{
//     // Check if there is anything already there.
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     } else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.getItem("todos", JSON.stringify(todos))
// } 

//! Event Listners
//? Add Todo 
addBtn.addEventListener('click', addTodo);

// Add event listener for Enter key press
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo(e);
    }
});

//? Delete & Check  
todoList.addEventListener('click', deleteCheck);

//? Filter Options
filterOptions.addEventListener('click', filterTodo); 
