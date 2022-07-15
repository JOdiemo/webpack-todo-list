const myList = (mytodoList) => {
  const sortedList = mytodoList.list.sort((a, b) => a.index - b.index);
  const itemsContainer = document.querySelector('.item');
  let itemsHtml = '';
  sortedList.forEach((todo) => {
    itemsHtml += `  <div class="todoItem">

                            <input type="checkbox" class="todoCheck"/>
                            <input id="${todo.index}" class="itemTodo" type="text" value="${todo.description}" />

                        <button id="${todo.index}" class="delButton"> <i class="fas fa-trash"></i></button>
                      </div>

    `;
  });
  itemsContainer.innerHTML = itemsHtml;

  // delete
  const removeBtns = document.querySelectorAll('.delButton');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      mytodoList.deleteList(Number(e.target.parentNode.id));
      // element.remove();
    });
  });

  // edit
  const todosContent = document.querySelectorAll('.itemTodo');
  todosContent.forEach((todoArray) => {
    todoArray.addEventListener('change', (e) => {
      todoArray.editList(Number(e.target.id), e.target.value);
    });
  });

};

export default myList;