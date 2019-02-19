import React, { useContext, useReducer } from 'react'

import { TodoStore, TodoReducer } from './features/Todo'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  const todoContext = useContext(TodoStore)
  const [state, dispatch] = useReducer(TodoReducer, todoContext)

  return (
    <TodoStore.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodoStore.Provider>
  )
}
