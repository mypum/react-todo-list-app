import React, { useContext, useMemo } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

import { TodoStore } from '../features/Todo'

import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { state } = useContext(TodoStore)
  const { tab, todos } = state

  function getFilteredTodos() {
    switch (tab) {
      case 'completed':
        return todos.filter(t => t.status === 'completed')
      case 'incomplete':
        return todos.filter(t => t.status === 'incomplete')
      default:
        return todos
    }
  }

  const filteredTodos = useMemo(() => {
    return getFilteredTodos()
  }, [tab, todos])

  if (isEmpty(filteredTodos)) {
    return (
      <EmptyContent>
        <span>Empty Tasks</span>
      </EmptyContent>
    )
  }

  return (
    <Wrapper>
      {filteredTodos.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 200px;
`

const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  span {
    text-transform: uppercase;
    font-size: 22px;
    color: #ddd;
  }
`
