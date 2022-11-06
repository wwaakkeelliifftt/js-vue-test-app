<template>
  <div>
    <ul>
      <TodoItem
          v-for="(todo_each, i) of $props.todooos"
          v-bind:todo="todo_each"
          v-bind:index="i"
          v-on:remove-todo="removeTodo" />
      <li/>
      <li>todo text almost end</li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props: ['todooos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      console.log(id)
      this.$emit('remove-todo-pf', id)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>