import React from 'react'
import styled from 'styled-components'

function Checkbox({ done = false, clickHandler }) {
  if (!done) {
    return <DoneButton onClick={clickHandler} />
  }

  return (
    <CheckWrap onClick={clickHandler}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26">
        <path d="M26.109 8.844c0 0.391-0.156 0.781-0.438 1.062l-13.438 13.438c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-7.781-7.781c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.609 10.25-10.266c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062z" />
      </svg>
    </CheckWrap>
  )
}

const CheckWrap = styled.div`
  transition: opacity 0.2s ease;
  opacity: 0.5;
  height: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    transform: scale(0.75);
    margin-left: -3px;
  }

  @media (min-width: 900px) {
    margin-left: 0;
    svg {
      transform: scale(0.85);
    }
  }
`

const DoneButton = styled.div`
  background-color: transparent;
  border: 2px solid #623aeb;
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 900px) {
    height: 25px;
    width: 25px;
    border: 4px solid #623aeb;
  }
`

export default Checkbox
