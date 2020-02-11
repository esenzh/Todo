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
      <i 
        class="fas fa-trash-alt"
        @click="handleDelete"
      />
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
  width: 400px;
}
@media screen and (max-width: 450px) {
  .todo-item {
    width: 300px;
  }
}
.todo-item p input {
  float: left;
}
.is-complete {
  text-decoration: line-through;
}
i {
  cursor: pointer;
  float: right;
  margin-right: 5px;
  color: red;
}
</style>
