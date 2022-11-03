<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button>Create</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      onSubmit() {
        console.log("Submit_ON --->> this.title=", this.title)
        if (this.title.trim()) {
          const newTodo = {
            id: Date.now(),
            title: this.title,
            completed: false
          }
          this.$emit('add-new-todo', newTodo)
          this.title = ''
        }
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }
  input {
    width: 400px;
    margin-right: 2rem;
  }
</style>