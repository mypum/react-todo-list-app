import React, { useContext, useMemo } from 'react'

import { TodoStore } from '../features/Todo'

import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { state } = useContext(TodoStore)
  const { tab, todos } = state

  function filterTodos() {
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
    return filterTodos()
  }, [tab, todos])

  return (
    <div>
      {filteredTodos.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
