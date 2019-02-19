import React, { useContext } from 'react'

import { TodoStore } from '../features/Todo'

export default function TodoItem(props) {
  const { dispatch } = useContext(TodoStore)
  const { todo } = props
  const { id, content } = todo

  function handleTodoRemove(e) {
    e.preventDefault()
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return (
    <div>
      {content} <button onClick={handleTodoRemove}>x</button>
    </div>
  )
}
