export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, payload] }
    case 'REMOVE_TODO':
      const todoFiltered = state.todos.filter(todo => todo !== payload)
      return { ...state, todos: todoFiltered }

    default:
      return state
  }
}
