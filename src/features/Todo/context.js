import React from 'react'

const TodoStore = React.createContext({
  tab: 'all',
  todos: [],
})

export default TodoStore
