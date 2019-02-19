import React, { useContext } from 'react'

import { TodoStore } from '../features/Todo'

import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { state } = useContext(TodoStore)

  return (
    <div>
      {state.todos.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
