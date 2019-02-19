import uniqid from 'uniqid'

export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uniqid(),
            content: payload,
            status: 'uncomplete',
          },
        ],
      }

    case 'REMOVE_TODO':
      const todoFiltered = state.todos.filter(({ id }) => id !== payload)
      return { ...state, todos: todoFiltered }

    default:
      return state
  }
}
