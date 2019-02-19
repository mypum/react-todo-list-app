import React from 'react'

const TodoStore = React.createContext({
  todos: [
    'Lorem ipsum dolor sit amet.',
    'Laborum iure repudiandae dicta quo!',
    'Eligendi quasi deserunt corrupti error!',
    'Odio hic deleniti perferendis dolore.',
  ],
})

export default TodoStore
