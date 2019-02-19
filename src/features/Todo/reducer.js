export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, payload] }

    default:
      return state
  }
}
