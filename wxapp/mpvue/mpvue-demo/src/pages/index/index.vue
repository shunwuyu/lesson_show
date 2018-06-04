<template>
  <div class="mpvue-demo">
    <p class="title">
      {{title}}
    </p>
    <input type="text" v-model='mytodo'>
    <button @click='addTodo'>添加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos">
      <li v-key='i' v-for='(todo, i) in todos'
      :class="{'done':todo.done}" @click='toggle(i)'>{{todo.text}}</li>
      <li>
        {{todoNum}}/{{todos.length}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: []
    }
  },
  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length
    }
  },
  created () {
    this.todos = wx.getStorageSync('todos') || []
  },
  methods: {
    clearTodo () {
      this.todos = this.todos.filter(v => !v.done)
      this.updateStorage()
    },
    updateStorage () {
      wx.setStorageSync('todos', this.todos);
    },
    addTodo () {
      if (!this.mytodo) {
        return
      }
      this.todos.push({text: this.mytodo, done: false})
      this.mytodo = ''
      this.updateStorage()
    },
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
    }
  }
}
</script>
<style>
.title {
  color: #ed12a3;
  text-align: center;
}
ul.todos {
  margin: 20px;
}
input {
  border: 2px solid #ed12a3;
}
.done {
  text-decoration: line-through;
}
</style>

