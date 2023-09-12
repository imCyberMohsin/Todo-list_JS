//* ToDo List script 

// Getting Elements
const addBtn = document.querySelector('.add-btn');
const inputText = document.querySelector('.note-input');

// event listner on + Button
addBtn.addEventListener('click', () => {
    const noteText = inputText.value;
    console.log(noteText);
})

