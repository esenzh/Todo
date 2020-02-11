<template>
  <div>
    <Header />
    <br>
    <TodoAdd />
    <br>
    <TodoList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import TodoAdd from "./components/TodoAdd.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoAdd,
    Header
  }
};
</script>

<style></style>
