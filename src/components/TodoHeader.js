import React, { useContext } from 'react'
import { TodoStore } from '../features/Todo'

function TodoHeader() {
  const { dispatch } = useContext(TodoStore)

  const handleClickTab = tab => e => {
    e.preventDefault()
    dispatch({ type: 'CHANGE_TAB', payload: tab })
  }

  return (
    <div>
      <button onClick={handleClickTab('all')}>All</button>
      <button onClick={handleClickTab('completed')}>Completed</button>
      <button onClick={handleClickTab('incomplete')}>Incomplete</button>
    </div>
  )
}

export default TodoHeader
