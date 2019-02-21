import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ClickOutside from 'react-click-outside'

import { TodoStore } from '../features/Todo'

export default function TodoItem(props) {
  const { id, status } = props.todo

  const [content, setContent] = useState(props.todo.content)
  const [isEdit, setEdit] = useState(false)
  const [isActionExpand, setActionExpand] = useState(false)
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
    setActionExpand(false)
  }

  function handleOnChangeInput(e) {
    setContent(e.target.value)
  }

  function toggleButtonGroup() {
    setActionExpand(!isActionExpand)
  }

  function hideActiveTodo() {
    if (isActionExpand || isEdit) {
      setActionExpand(false)
      setEdit(false)
    }
  }

  function renderContent() {
    if (isEdit) {
      return (
        <React.Fragment>
          <EditInput>
            <input
              autoFocus
              value={content}
              onChange={handleOnChangeInput}
              onKeyUp={handleSubmitForm}
              type="text"
            />
          </EditInput>
        </React.Fragment>
      )
    }

    return <TodoTitle status={status}>{content}</TodoTitle>
  }

  return (
    <ClickOutside onClickOutside={hideActiveTodo}>
      <TodoWrap>
        <TodoBg isEdit={isEdit}>
          <TodoRow isActionExpand={isActionExpand}>
            <DoneButtonWrap>
              <DoneButton
                onClick={() => {
                  handleTodoUpdateStatus('completed')
                }}
              />
            </DoneButtonWrap>
            <TodoContent>{renderContent()}</TodoContent>
            <MoreWrap>
              <MoreButton onClick={toggleButtonGroup}>+</MoreButton>
            </MoreWrap>
          </TodoRow>
        </TodoBg>
        {isActionExpand && (
          <ActionGroup>
            <button onClick={handleClickEditButton}>Edit To-do</button>
            <button onClick={handleTodoRemove}>Delete To-do</button>
          </ActionGroup>
        )}
      </TodoWrap>
    </ClickOutside>
  )
}

const TodoWrap = styled.div`
  position: relative;
`

const TodoBg = styled.div`
  background-color: ${({ isEdit }) => (isEdit ? '#fffcee' : '#fff')};
  transition: background-color 0.2s ease-in-out;
  padding: 0 60px;
`

const TodoRow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  ${({ isActionExpand }) =>
    !isActionExpand && 'border-bottom: 1px solid #e7e7f5'};
`

const TodoTitle = styled.span`
  position: relative;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.1;
  transition: color 0.2s ease-in-out;
  color: ${({ status }) => (status === 'completed' ? '#999' : '#222')};
  text-decoration: ${({ status }) =>
    status === 'completed' ? 'line-through' : 'none'};
`

const TodoContent = styled.div`
  flex-grow: 1;
  padding: 15px 0;
`

const DoneButtonWrap = styled.div`
  flex: 1 0 40px;
  max-width: 40px;
  padding: 15px 0;
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
  flex: 1 0 55px;
  max-width: 55px;
  height: 55px;
  position: relative;
`

const MoreButton = styled.button`
  position: absolute;
  height: 55px;
  width: 55px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 38px;
  line-height: 0;
  cursor: pointer;
`

const ActionGroup = styled.div`
  display: flex;
  padding: 0 60px;

  button {
    &:first-child {
      border-right: 0;
    }

    width: 50%;
    display: block;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 6px 25px;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #623aeb;
    }
  }
`

const EditInput = styled.div`
  input {
    height: 24px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: 300;
    width: 100%;
    margin-left: -1px;
  }
`
