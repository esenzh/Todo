<template>
  <div class="todo-list">
    <div 
      v-for="todo in todos" 
      :key="todo.id"
    >
      <TodoItem 
        :todo="todo" 
        @del-todo="$emit('del-todo', todo.id)" 
      />
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
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.todo-list {
  width: 400px;
}
</style>
