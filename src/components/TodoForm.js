import React, { useContext, useState } from 'react'

import { TodoStore } from '../features/Todo'

function TodoForm() {
  const { dispatch } = useContext(TodoStore)
  const [todo, setTodo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')
  }

  function handleOnChange(e) {
    setTodo(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleOnChange} type="text" />
      </form>
    </div>
  )
}

export default TodoForm
