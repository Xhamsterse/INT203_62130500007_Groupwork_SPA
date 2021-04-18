<template>
  <div>
    <H1>List</H1>{{ list }}
    <div v-for="list in this.lists" :key="list">
      <div v-if="isedit" style="display: inline-block">{{ list.todo }}</div>
      <div v-else><input v-model="list.todo" :placeholder="list.todo" /></div>
      <button
        @click.left="startedit(list)"
        class="btn btn-outline-primary border-0 ml-2"
      >
        <span class="fa fa-edit"></span>
      </button>
      <button @click="deleted(list.id)" class="btn btn-outline-danger border-0">
        <span class="fa fa-trash"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      url: "http://localhost:5000/photos",
      lists: [],
      isedit: true,
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
    async deleted(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.lists = this.lists.filter((list) => list.id !== deleteId);
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
    async edit(editing) {
      try {
        const res = await fetch(`${this.url}/${editing.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            todo: editing.todo,
          }),
        });
        const data = await res.json();
        this.lists = this.lists.map((list) =>
          list.id === editing.id
            ? {
                ...list,
                todo: data.todo,
              }
            : list
        );
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
    show() {
      this.isedit = !this.isedit;
    },
    startedit(value) {
      this.show();
      console.log(value);
      if (this.isedit) {
        this.edit({
          todo: value.todo,
          id: value.id,
        });
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