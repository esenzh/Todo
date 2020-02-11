const state = {
  todos: [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Buy bread", completed: false },
    { id: 3, title: "Buy water", completed: false },
    { id: 4, title: "Buy groceries", completed: false },
    { id: 5, title: "Buy water bottle", completed: false }
  ]
};

const getters = {
    TODOS: (state) => state.todos
};

const actions = {
    fetchTodos({ commit }) {
        commit('setTodos', state.todos);
    },
    addTodo({ commit }, todo) {
        commit('newTodo', todo);
    } 
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
  state,
  getters,
  actions,
  mutations
};
