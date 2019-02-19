import uniqid from 'uniqid'

function replaceItemArray(arr, index, item) {
  let newArr = arr.slice()
  newArr.splice(index, 1, item)
  return newArr
}

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

      const editedTodos = replaceItemArray(state.todos, editIndex, editedTodo)

      return {
        ...state,
        todos: editedTodos,
      }

    case 'REMOVE_TODO':
      const todoFiltered = state.todos.filter(({ id }) => id !== payload)
      return { ...state, todos: todoFiltered }

    case 'UPDATE_STATUS_TODO':
      const markTodoIndex = state.todos.findIndex(({ id }) => id === payload.id)
      const updatedStatusTodo = {
        ...state.todos[markTodoIndex],
        status: payload.status,
      }

      const updatedStatusTodos = replaceItemArray(
        state.todos,
        markTodoIndex,
        updatedStatusTodo,
      )

      return { ...state, todos: updatedStatusTodos }

    default:
      return state
  }
}
