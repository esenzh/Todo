<template>
  <form @submit="handleSubmit">
    <input
      class="input-todo"
      type="text"
      v-model="title"
      placeholder="Title..."
    />
    <button class="add-button" type="submit">Add</button>
  </form>
</template>

<script>
import uuid from "uuid";
export default {
  name: "TodoAdd",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      this.title = "";
      this.$emit("todo", newTodo);
    }
  }
};
</script>

<style scoped>
.input-todo {
  padding: 10px;
  width: 380px;
  font-size: 17px;
  border-radius: 5px;
  margin-right: 5px;
}
.add-button {
  padding: 5px;
  font-size: 17px;
  width: 100px;
  height: 43px;
  border-radius: 5px;
  background-color: blueviolet;
  color: #ffffff;
}
</style>
