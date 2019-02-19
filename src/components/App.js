import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function App() {
  return (
    <div>
      <TodoForm />
      <TodoList>
        {[...Array(4).keys()].map((_, i) => (
          <TodoList.Item key={i} />
        ))}
      </TodoList>
    </div>
  )
}
