<template>
  <div>
    <Header />
    <br />
    <TodoAdd v-on:todo="addTodo" />
    <br />
    <TodoList
      v-bind:todos="todos"
      msg="Welcome to Your Vue.js App"
      v-on:del-todo="deleteTodo"
    />
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
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todos = [...this.todos, todo]
    }
  }
};
</script>

<style></style>
