<template>
  <div class="todo-list">
    <div 
      v-for="todo in TODOS" 
      :key="todo.id"
    >
      <TodoItem 
        :todo="todo" 
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: mapGetters(['TODOS']),
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos'])
  }
};
</script>

<style scoped>
.todo-list {
  width: 400px;
}
</style>
