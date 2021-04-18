<template>

  <h1>Everything Jingle Bell</h1>
  <form @submit.prevent="Submit()">
    <label>Put some message @ here and go Info</label>
    <input v-model="newTodo" type="text" name="newTodo" autocomplete="off" />
    <button>Submit</button>
  </form>
  
  <div class="home"></div>

</template>


<script>
// import Todoapp from "@/components/Todoapp.vue";

export default {
  name: "home",
  data() {
    return {
      newTodo: "",
      url: "http://localhost:5000/photos",
      info: [],
    };
  },
  // components: { Todoapp },
  methods: {
    Submit() {
      this.addSubmit({
        newTodo: this.newTodo,
      });
      
    },

    async addSubmit(addsubmit) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            todo: addsubmit.newTodo
          }),
        });
        const data = await res.json();
        this.info = [...this.info, data];
      } catch (error) {
        console.log(`Colud not save! ${error}`);
      }
    },
  },
};
</script>
<style scoped>
</style>


