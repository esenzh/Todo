<template>
  <div>
    <TodoAdd />
    <br>
    <TodoList v-bind:todos="todos" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoAdd from "./components/TodoAdd.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoAdd
  },
  data() {
    return {
      todos: [
        { title: "Buy milk", id: 1, completed: false },
        { title: "Buy bread", id: 2, completed: false },
        { title: "Buy beer", id: 3, completed: false },
        { title: "Buy cigaretes", id: 4, completed: false }
      ]
    };
  }
};
</script>

<style>
</style>
