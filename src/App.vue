<template>
  <hr/>
  <h1>Application</h1>
  <hr/>
  <TodoList
      v-bind:todooos="todos"
      @remove-todo-pf="removeTodoParentFunc"
  />
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 1, title: 'Вынести мусор', completed: false},
        {id: 2, title: 'Купить пыво', completed: true},
        {id: 3, title: "Купить хлеб", completed: false},
        {id: 4, title: "Вернуться", completed: false}
      ]
    }
  },
  components: {
    TodoList: TodoList
  },
  methods: {
    removeTodoParentFunc(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
