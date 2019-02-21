import React from 'react'

const TodoStore = React.createContext({
  tab: 'all',
  todos: [
    {
      id: 12221,
      content: 'Book Flights to Paris',
      status: 'incomplete',
    },
    {
      id: 234234,
      content: 'Watch Interstellar',
      status: 'incomplete',
    },
    {
      id: 345345,
      content: 'Send presentation to Frank',
      status: 'incomplete',
    },
    {
      id: 234623,
      content: 'Diary of a Wimpy Kid',
      status: 'incomplete',
    },
    {
      id: 2357806,
      content: 'เอารถไปล้าง',
      status: 'incomplete',
    },
    {
      id: 444378,
      content: 'จ่ายบิลค่าโทรศัพท์',
      status: 'completed',
    },
  ],
})

export default TodoStore
