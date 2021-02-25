const lists =document.querySelector('#booklist ul');
const todoField = document.querySelector('#foraddtodo')

// add todo 
const addTodos = document.forms['addTodo'];
addTodos.addEventListener('submit',function(e){
    e.preventDefault();
    if(todoField.value !== ' '){
        const Inputvalue = addTodos.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const todoName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        const checkBox = document.createElement('input')
        checkBox.setAttribute("type","checkbox");
        li.appendChild(todoName);
        li.appendChild(checkBox);
        li.appendChild(deleteBtn);
        lists.appendChild(li);
        todoName.textContent = Inputvalue;
        deleteBtn.textContent= "delete"
        deleteBtn.classList.add('delete')
        todoName.classList.add('title')
        todoField.value = " ";
    }  else {
        li.style.display = 'none'
    }
     
})

//add todos to local storage
/*
let todos = JSON.parse(localStorage.getItem("todos")); 
if(!todos){
	//todos = []
}
todos[] = ['title' => Inputvalue, 'checked' => 0];
localStorage.setItem("todos", JSON.stringify(todos));
*/


//Get todos
/*

let todos = JSON.parse(localStorage.getItem("todos"));
if(todos){
	todos.forEach(function(todo){
		display todo here to the user
		todo.title will return the title of the todo
		todo.checked will return the value of the checked, you can set the value to 1 if the box has been checked
	})
}

*/


// delete todos
lists.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement
        lists.removeChild(li)
    }
})

  
// filter todos 
const filterField = document.forms['filterTodo'].querySelector('input');
filterField.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const todos = booklist.getElementsByTagName('li');
    Array.from(todos).forEach(function(item){
        const title = item.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1){
            item.style.display = 'block'
            }
             else {
                item.style.display ='none';
            }
    })
})
