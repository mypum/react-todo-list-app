import React, { useContext } from 'react'

import { TodoStore } from '../features/Todo'

export default function TodoItem(props) {
  const { todo } = props
  const { dispatch } = useContext(TodoStore)

  function handleTodoRemove(e) {
    e.preventDefault()
    dispatch({ type: 'REMOVE_TODO', payload: todo })
  }

  return (
    <div>
      {todo} <button onClick={handleTodoRemove}>x</button>
    </div>
  )
}
