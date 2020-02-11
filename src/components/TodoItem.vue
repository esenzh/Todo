<template>
  <div 
    class="todo-item" 
    :class="{ 'is-complete': todo.completed }"
  >
    <p>
      <input 
        type="checkbox" 
        @change="handleComplete" 
      >
      {{ todo.title }}
      <button
        class="delete-button"
        type="button"
        @click="handleDelete"
      >
        X
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    handleComplete() {
      this.todo.completed = !this.todo.completed;
    },
    handleDelete() {
      this.deleteTodo(this.todo.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  background-color: lightgrey;
  padding: 3px;
  border-bottom: 1px solid #000000;
}
.is-complete {
  text-decoration: line-through;
}
.delete-button {
  background-color: red;
  color: #ffffff;
  width: 25px;
  height: 25px;
  padding: 5px;
  float: right;
  border-radius: 50%;
  cursor: pointer;
}
</style>
