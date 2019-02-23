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
        <Container>
          <Wrapper>
            <TodoHeader />
            <TodoForm />
            <TodoList />
          </Wrapper>
        </Container>
        <Credit>
          Created by{' '}
          <a
            href="https://github.com/mypum"
            rel="noopener noreferrer"
            target="_blank">
            @mypum
          </a>
        </Credit>
      </TodoStore.Provider>
    </React.Fragment>
  )
}

const Container = styled.div`
  padding: 0 15px;

  @media (min-width: 900px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  margin: 15px auto 0;
  padding: 40px 0 60px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 125px 0px rgba(46, 27, 111, 0.18);

  @media (min-width: 900px) {
    width: 780px;
  }
`

const Credit = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 16px;

  a {
    color: #222;
    text-decoration: underline;
  }
`
