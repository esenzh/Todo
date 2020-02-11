<template>
  <form 
    class="submit-form"
    @submit="handleSubmit"
  >
    <input
      v-model="title"
      class="input-todo"
      type="text"
      placeholder="Title..."
      required
    >
    <button 
      type="submit"
    >
      Add
    </button>
  </form>
</template>

<script>
import uuid from "uuid";
import { mapActions } from "vuex";

export default {
  name: "TodoAdd",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      this.title = '';
      this.addTodo(newTodo);
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
.submit-form {
  text-align: center;
}
.submit-form button {
  padding: 5px;
  font-size: 17px;
  width: 100px;
  height: 43px;
  border-radius: 5px;
  background-color: blueviolet;
  color: #ffffff;
  cursor: pointer;
}
</style>
