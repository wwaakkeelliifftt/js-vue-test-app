<template>
  <h1>Application</h1>
  <hr/>
  <AddTodo
      @add-new-todo="addNewTodo" />
  <TodoList
      v-bind:todooos="todos"
      @remove-todo-pf="removeTodoParentFunc"
  />
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'app',
  data() {
    return {
      todos: []
    }
  },
  components: {
    TodoList: TodoList,
    AddTodo
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=13')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.todos = json
        })
  },
  methods: {
    removeTodoParentFunc(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addNewTodo(todo) {
      this.todos.push(todo)
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
