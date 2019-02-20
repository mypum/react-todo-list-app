import React, { useMemo, useContext } from 'react'

import { TodoStore } from '../features/Todo'

function TodoHeader() {
  const { state, dispatch } = useContext(TodoStore)
  const { todos } = state

  const handleClickTab = tab => e => {
    e.preventDefault()
    dispatch({ type: 'CHANGE_TAB', payload: tab })
  }

  const getCompletedPercentage = () => {
    const numAllTodo = todos.length
    const numCompletedTodo = todos.filter(t => t.status === 'completed').length
    const someZero = [numAllTodo, numCompletedTodo]

    if (someZero.includes(0)) return 0

    const percentage = (numCompletedTodo / numAllTodo) * 100

    return percentage.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })
  }

  const completedPercentage = useMemo(() => {
    return getCompletedPercentage()
  }, [todos])

  return (
    <div>
      <div>Completed: {`${completedPercentage}%`}</div>
      <button onClick={handleClickTab('all')}>All</button>
      <button onClick={handleClickTab('completed')}>Completed</button>
      <button onClick={handleClickTab('incomplete')}>Incomplete</button>
    </div>
  )
}

export default TodoHeader
