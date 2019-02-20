import React, { useContext, useReducer } from 'react'

import { TodoStore, TodoReducer } from './features/Todo'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'

export default function App() {
  const todoContext = useContext(TodoStore)
  const [state, dispatch] = useReducer(TodoReducer, todoContext)

  return (
    <TodoStore.Provider value={{ state, dispatch }}>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </TodoStore.Provider>
  )
}
