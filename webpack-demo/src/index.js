import './style.css';
import myList from './app.js';
import ThingsTodo from './todolist.js';

const todoArray = new ThingsTodo();
myList(todoArray);

const addTodoBtn = document.querySelector('.addButton');
addTodoBtn.addEventListener('click', () => {
  const description = document.querySelector('.todoInput').value.trim();
  const completed = false;
  const index = todoArray.list.length + 1;
  const newTodo = { description, completed, index };
  if (description) {
    todoArray.addList(newTodo);
    myList(todoArray);
  }
});