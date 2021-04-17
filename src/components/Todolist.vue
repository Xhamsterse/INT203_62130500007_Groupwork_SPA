<template>
  <!-- <h1>ToDo List</h1>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{
        todo.content
      }}</span>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4> -->
   <h1>Todo Info</h1>
  <form @submit.prevent="addTodo()">
    <label>Check Info @ here</label>
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button>Submit</button>
  </form>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>