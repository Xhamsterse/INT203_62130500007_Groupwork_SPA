<template>
  <h1>Todo App</h1>
  <form @submit.prevent="addTodo()">
    <label>Put @ here and go Info</label>
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button>Submit</button>
  </form>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
