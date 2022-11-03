<template>
  <div>
    <ul>
      <TodoItem
          v-for="todo_each of $props.todooos"
          v-bind:todo="todo_each"
          v-on:remove-todo="removeTodo"
      />
      <li/>
      <li>todo text</li>
      <li/>
      {{todooos}}
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