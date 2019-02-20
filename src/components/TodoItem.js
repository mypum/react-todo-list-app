import React, { useContext, useState } from 'react'
import styled from 'styled-components'

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

    return <TodoTitle>{content}</TodoTitle>
  }

  return (
    <TodoWrap>
      <DoneButtonWrap>
        <DoneButton
          onClick={() => {
            handleTodoUpdateStatus('completed')
          }}
        />
      </DoneButtonWrap>
      <TodoContent>{renderContent()}</TodoContent>
      <MoreWrap>
        <MoreButton>
          <span>...</span>
        </MoreButton>
        <MoreFloat>
          <button onClick={handleClickEditButton}>Edit</button>
          <button onClick={handleTodoRemove}>x</button>
        </MoreFloat>
      </MoreWrap>
    </TodoWrap>
  )
}

const TodoWrap = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7f5;
  position: relative;
`

const TodoTitle = styled.span`
  font-size: 22px;
  line-height: 1.1;
`

const TodoContent = styled.div`
  flex-grow: 1;
`

const DoneButtonWrap = styled.div`
  flex: 1 0 40px;
  max-width: 40px;
`

const DoneButton = styled.div`
  background-color: transparent;
  border: 4px solid #623aeb;
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`

const MoreWrap = styled.div`
  flex: 1 0 40px;
  max-width: 40px;
`

const MoreButton = styled.div`
  flex: 1 0 40px;
  max-width: 40px;
`

const MoreFloat = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px 0px 125px 0px rgba(46, 27, 111, 0.18);
`
