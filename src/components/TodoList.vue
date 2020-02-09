<template>
  <div class="todo-list">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
.todo-list {
    width: 400px
}
</style>
