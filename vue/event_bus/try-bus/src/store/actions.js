export default {
  addTodo ( { commit } ,text ) {
    // dispatch({type: '', payload:})
    commit('addTodo', {
      text,
      done: false
    })
  },
  toggleTodo ({commit}, todo) {
    commit('editTodo', {todo, done: !todo.done})
  }
}
