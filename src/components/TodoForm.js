import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { TodoStore } from '../features/Todo'

function TodoForm() {
  const { state, dispatch } = useContext(TodoStore)
  const [todo, setTodo] = useState('')
  const { tab } = state

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')

    if (tab === 'completed') {
      dispatch({ type: 'CHANGE_TAB', payload: 'all' })
    }
  }

  function handleOnChange(e) {
    setTodo(e.target.value)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          value={todo}
          onChange={handleOnChange}
          type="text"
          placeholder="Add a to-do ..."
        />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 60px;
  margin-bottom: 10px;
`

const Input = styled.input`
  border: 2px solid #d6d9e4;
  border-radius: 12px;
  outline: none;
  font-size: 20px;
  padding: 5px 15px;
  width: 100%;
`

export default TodoForm
