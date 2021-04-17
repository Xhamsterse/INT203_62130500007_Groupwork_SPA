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


<style scoped>
</style>
