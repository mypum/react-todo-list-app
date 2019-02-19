import React, { useContext, useState } from 'react'

import { TodoStore } from '../features/Todo'

export default function TodoItem(props) {
  const { id } = props.todo

  const [content, setContent] = useState(props.todo.content)
  const [isEdit, setEdit] = useState(false)
  const { dispatch } = useContext(TodoStore)

  function handleTodoRemove(e) {
    e.preventDefault()
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  function handleTodoEdit(e) {
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id,
        content,
      },
    })
  }

  function handleTodoUpdateStatus(status) {
    dispatch({
      type: 'UPDATE_STATUS_TODO',
      payload: {
        id,
        status,
      },
    })
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) {
      handleTodoEdit()
      setEdit(false)
    }
  }

  function handleClickEditButton(e) {
    e.preventDefault()
    setEdit(true)
  }

  function handleOnChangeInput(e) {
    setContent(e.target.value)
  }

  function renderContent() {
    if (isEdit) {
      return (
        <input
          value={content}
          onChange={handleOnChangeInput}
          onKeyUp={handleSubmitForm}
          type="text"
        />
      )
    }

    return (
      <React.Fragment>
        <button
          onClick={e => {
            e.preventDefault()
            handleTodoUpdateStatus('complete')
          }}>
          Done
        </button>
        {content}
        <button onClick={handleClickEditButton}>Edit</button>
        <button onClick={handleTodoRemove}>x</button>
      </React.Fragment>
    )
  }

  return <div>{renderContent()}</div>
}
