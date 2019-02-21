import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ClickOutside from 'react-click-outside'

import { TodoStore } from '../features/Todo'
import Checkbox from './Checkbox'

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

  function toggleTodoStatus() {
    if (status === 'completed') {
      return handleTodoUpdateStatus('incomplete')
    }

    return handleTodoUpdateStatus('completed')
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
              <Checkbox
                done={status === 'completed'}
                clickHandler={toggleTodoStatus}
              />
            </DoneButtonWrap>
            <TodoContent>{renderContent()}</TodoContent>
            <MoreWrap>
              <MoreButton onClick={toggleButtonGroup}>
                {isActionExpand ? '-' : '+'}
              </MoreButton>
            </MoreWrap>
          </TodoRow>
        </TodoBg>
        {isActionExpand && (
          <ActionGroup>
            <button onClick={handleClickEditButton}>Edit</button>
            <button onClick={handleTodoRemove}>Delete</button>
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
  padding: 0 15px;

  @media (min-width: 900px) {
    padding: 0 60px;
  }
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
  font-size: 18px;
  font-weight: 300;
  line-height: 1.1;
  transition: color 0.2s ease-in-out;
  height: 32px;
  color: ${({ status }) => (status === 'completed' ? '#999' : '#222')};
  text-decoration: ${({ status }) =>
    status === 'completed' ? 'line-through' : 'none'};

  @media (min-width: 900px) {
    font-size: 20px;
  }
`

const TodoContent = styled.div`
  flex-grow: 1;
  padding: 10px 0;
`

const DoneButtonWrap = styled.div`
  flex: 1 0 40px;
  max-width: 40px;
  padding: 15px 0;
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
  flex: 1;
  white-space: normal;
  width: 100%;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 28px;
  line-height: 0;
  cursor: pointer;

  @media (min-width: 900px) {
    font-size: 38px;
  }
`

const ActionGroup = styled.div`
  display: flex;
  padding: 0 15px;

  @media (min-width: 900px) {
    padding: 0 60px;
  }

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
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #623aeb;
      background-color: #ece7ff;
    }
  }
`

const EditInput = styled.div`
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 300;
    width: 100%;
    margin-left: -1px;
    line-height: 1.1;
    @media (min-width: 900px) {
      font-size: 20px;
    }
  }
`
