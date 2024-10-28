console.log('this is working right here')
const submit_btn = document.getElementById('submit-todo-btn')
const todo_list =document.getElementById('todo-list')
const todo_value = document.getElementById('todo-value')
const update_tab = document.getElementById('update-todo-btn')
const clear_tab = document.getElementById('clear-todo-btn')


const todo_creation = function(){
    const newTodo = document.createElement('li')
    newTodo.className = "list_items"
    newTodo.innerHTML = `
              <input type="checkbox" id="todo-item" name="todo-item" value="todo-item">
              <span>${todo_value.value}</span>
    `
    todo_list.append(newTodo)
    todo_value.value=  ' '
    return newTodo
}

const todoUpdater = todo_creation()
console.log(todoUpdater)
// TODO: GET ACCESS TO THESE CREATED LISTS IN THE FUNCTION ABOVE. 

const update_done = function(){
    // this is access the item now to figure out how to do the strikethrough thing  
    const list_item = document.getElementsByClassName('list_items')
    console.log(list_item)
    for(let i = 0; i<list_item.length; i++){
        const item = list_item[i]; 
        const checkbox = item.querySelector('input[type="checkbox"]');
        const todoText = item.querySelector('span')

        checkbox.addEventListener('change', ()=>{
            if(checkbox.checked){
                todoText.style.textDecoration = 'line-through';
            }
            else{
                todoText.style.textDecoration = 'none'
            }
        })
    }
 }

 const clear_done =function(){
    const list_items = document.getElementsByClassName('list_items')
    const parent = list_items[0]?.parentNode; 

    while(parent && parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
 }


submit_btn.addEventListener('click', todo_creation)
update_tab.addEventListener('click', update_done)
clear_tab.addEventListener('click', clear_done )