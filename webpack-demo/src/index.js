import './style.css';

const todosList = [
  { description: 'wash the dishes', completed: false, index: 1 },
  { description: 'complete To Do List project', completed: false, index: 2 },
];

const render = (list) => {
  const sortedTodos = list.sort((a, b) => a.index - b.index);
  const listContainer = document.querySelector('.todos');
  let listHtml = '';
  sortedTodos.forEach((todo) => {
    listHtml += ` <div class="item">
        <input type="checkbox" /><span> ${todo.description}</span>
    </div>`;
  });
  listContainer.innerHTML = listHtml;
};

render(todosList);