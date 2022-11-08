<template>
  <div>
    <h3>Todooos title</h3>
    <hr/>
    <router-link to="/">Home (router-link)</router-link>
    <hr/>
    <AddTodo
        @add-new-todo="addNewTodo" />
    <select v-model="listFilter">
      <option disabled value="">Выберите один из вариантов</option>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr/>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredList.length"
        v-bind:todooos="filteredList"
        @remove-todo-pf="removeTodoParentFunc"/>
    <p v-else>Vy udalili vse Todooosy</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      loading: true,
      listFilter: 'all'
    }
  },
  components: {
    TodoList: TodoList,
    AddTodo,
    Loader
  },
  watch: {
    // func name must be equal to @data.field to sync
    listFilter(value) {
      console.log(value)
    }
  },
  // func in computed vue registered as component variable
  computed: {
    filteredList() {
      if (this.listFilter === 'all') {
        return this.todos
      }
      if (this.listFilter === 'completed') {
        return this.todos.filter(eachTodo => eachTodo.completed)
      }
      if (this.listFilter === 'not-completed') {
        return this.todos.filter(eachTodo => !eachTodo.completed)
      }
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.todos = json
          setTimeout(this.removeLoaderWithDelay, 666)
        })
  },
  methods: {
    removeTodoParentFunc(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addNewTodo(todo) {
      this.todos.push(todo)
    },
    removeLoaderWithDelay() {
      // delay in func invoke
      this.loading = false
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
