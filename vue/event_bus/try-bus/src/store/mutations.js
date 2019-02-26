export const STORAGEW_KEY = 'todos-vuejs'
export const mutations = {
  addTodo (state, todo) {
    console.log(todo);
    state.todos.push(todo);
  },
  editTodo (state, { todo, text = todo.text,
     done = todo.done}) {
    todo.text = text
    todo.done = done
  }
}
