<template>
  <div class="backgroundHome" :class="{ backgroundForNotMainPage: notMainPage }">
    <h1>App.vue</h1>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    notMainPage() {
      return this.$route.path === '/todos'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.backgroundForNotMainPage {
  border: 5px solid #bbd;
  padding: .5rem 1rem;
  background-color: #ffe;
}
</style>
