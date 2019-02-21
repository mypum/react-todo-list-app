import React, { useContext, useReducer } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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
        <Wrapper>
          <TodoHeader />
          <TodoForm />
          <TodoList />
        </Wrapper>
      </TodoStore.Provider>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 780px;
  margin: 30px auto 0;
  padding: 60px 0;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 125px 0px rgba(46, 27, 111, 0.18);
`
