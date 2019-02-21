import React, { useMemo, useContext } from 'react'
import styled from 'styled-components'
import { TodoStore } from '../features/Todo'
import TodoProgress from './TodoProgress'

function TodoHeader() {
  const { state, dispatch } = useContext(TodoStore)
  const { todos, tab } = state

  const handleClickTab = tab => e => {
    e.preventDefault()
    dispatch({ type: 'CHANGE_TAB', payload: tab })
  }

  const getCompletedPercentage = () => {
    const numAllTodo = todos.length
    const numCompletedTodo = todos.filter(t => t.status === 'completed').length
    const numList = [numAllTodo, numCompletedTodo]

    if (numList.includes(0)) return 0

    const percentage = (numCompletedTodo / numAllTodo) * 100

    return percentage.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })
  }

  const completedPercentage = useMemo(() => {
    return getCompletedPercentage()
  }, [todos])

  return (
    <Wrapper>
      <TodoProgress percentage={completedPercentage} />
      <Button active={tab === 'all'} onClick={handleClickTab('all')}>
        All
      </Button>
      <Button
        active={tab === 'completed'}
        onClick={handleClickTab('completed')}>
        Completed
      </Button>
      <Button
        active={tab === 'incomplete'}
        onClick={handleClickTab('incomplete')}>
        Incomplete
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;

  @media (min-width: 900px) {
    padding: 0 60px;
  }
`

const Button = styled.button`
  border-radius: 12px;
  padding: 7px 15px;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  color: #613fea;
  border: none;
  background-color: ${({ active }) => (active ? '#ECE7FF' : '#fff')};

  @media (min-width: 375px) {
    font-size: 16px;
    margin-right: 8px;
  }

  @media (min-width: 900px) {
    margin-right: 10px;
  }
`

export default TodoHeader
