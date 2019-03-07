<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>
    
  </section>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import { mapActions } from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  name: 'App',
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
  },
  methods: {
    addTodo (e) {
      const text = e.target.value
      // console.log(this.$store);
      // return;
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    }
  },
  components: { TodoItem },
}
</script>
<style src="todomvc-app-css/index.css"></style>