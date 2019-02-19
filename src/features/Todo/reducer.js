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

    case 'EDIT_TODO':
      const editIndex = state.todos.findIndex(({ id }) => id === payload.id)
      const editedTodo = {
        ...state.todos[editIndex],
        content: payload.content,
      }

      let newTodos = state.todos.slice()
      newTodos.splice(editIndex, 1, editedTodo)

      return {
        ...state,
        todos: newTodos,
      }

    case 'REMOVE_TODO':
      const todoFiltered = state.todos.filter(({ id }) => id !== payload)
      return { ...state, todos: todoFiltered }

    default:
      return state
  }
}
