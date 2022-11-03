<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <strong>(id={{todo.id}}) </strong>
      <strong>index={{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button
        class="remove"
        v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  components: {},

  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #cdc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  input {
    margin-right: 1rem;
  }
  .remove {
    background: red;
    font-weight: bold;
    border-radius: 50%;
    color: #fff;
  }
  .done {
    text-decoration: line-through;
  }
</style>