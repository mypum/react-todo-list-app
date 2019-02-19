import React, { useContext } from 'react'

import { TodoStore } from '../features/Todo'

import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { todos } = useContext(TodoStore)

  return (
    <div>
      {todos.map((todo, i) => (
        <TodoItem key={i}>{todo}</TodoItem>
      ))}
    </div>
  )
}
