export default class thingsTodo {
  constructor() {
    if (localStorage.getItem('todoList')){
      this.list = JSON.parse(localStorage.getItem('todoList'));
    } else {
      this.list = [];
    }
  }

  addList(lsList) {
    this.list.push(lsList);
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  deleteList(deleteID) {
    this.list = this.list.filter((todoArray) => todoArray.index !== deleteID);
    this.list.forEach((todoArray, index) => {
      todoArray.index = index + 1;
    });
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  editList(editId, newDescription) {
    const newTodoDesc = this.list.map((todoArray) => {
      if (todoArray.index === editId) {
        return { ...todoArray, description: newDescription };
      }
      return todoArray;
    });
    localStorage.setItem('todoList', JSON.stringify(newTodoDesc));
  }
}