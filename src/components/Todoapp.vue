<template>
  <h1>ToDo App</h1>
  <form @submit.prevent="addTodo()">
    <label>New ToDo </label>
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button>Submit</button>
  </form>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
