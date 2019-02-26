<template>
<!-- 未完成， 已完成， 编辑中 -->
<li class="todo" :class="{completed: todo.done,
 editing:editing}">
  <div class="view">
    <input type="checkbox" class="toggle"
     :checked="todo.done"
      @change="toggleTodo(todo)">
    <label v-text = "todo.text"></label>
  </div>
</li>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  methods: {
    ...mapActions([
      'toggleTodo'
    ])
  }
}
</script>
