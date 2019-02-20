import React, { useContext, useReducer } from 'react'
import { createGlobalStyle } from 'styled-components'

import { resetStyled, baseStyled } from './styles'
import { TodoStore, TodoReducer } from './features/Todo'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'

const GlobalStyle = createGlobalStyle`
  ${resetStyled}
  ${baseStyled}
`

export default function App() {
  const todoContext = useContext(TodoStore)
  const [state, dispatch] = useReducer(TodoReducer, todoContext)

  return (
    <React.Fragment>
      <GlobalStyle />
      <TodoStore.Provider value={{ state, dispatch }}>
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </TodoStore.Provider>
    </React.Fragment>
  )
}
