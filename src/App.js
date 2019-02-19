import React from 'react'

import { TodoStore } from './features/Todo'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <TodoStore.Provider
      value={{
        todos: [
          'Lorem ipsum dolor sit amet.',
          'Laborum iure repudiandae dicta quo!',
          'Eligendi quasi deserunt corrupti error!',
          'Odio hic deleniti perferendis dolore.',
        ],
      }}>
      <TodoForm />
      <TodoList />
    </TodoStore.Provider>
  )
}
