import React from 'react'

import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { children } = props
  return <div>{children}</div>
}

TodoList.Item = TodoItem
