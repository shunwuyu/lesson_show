export const STORAGE_KEY = 'todos-vuejs'

export const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  editTodo (state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text
    todo.done = done
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo ({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value })
  },
}

