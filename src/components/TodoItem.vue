<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" v-on:change="handleComplete" />
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    handleComplete() {
      this.todo.completed = !this.todo.completed;
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

</style>
