<template>
  <div>
    <H1>List</H1>{{ list }}
    <div v-for="list in this.lists" :key="list">{{list.todo}} </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      url: "http://localhost:5000/photos",
      lists: [],
    };
  },
  methods: {
    async getInfoResult() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Colud not get! ${error}`);
      }
    },
  },
  async created() {
    this.lists = await this.getInfoResult();
  },
};
</script>

<style>
</style>