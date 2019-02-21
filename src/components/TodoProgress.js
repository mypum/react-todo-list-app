import React from 'react'
import styled from 'styled-components'

function TodoProgress(props) {
  const { percentage } = props

  function percenColor() {
    if (percentage > 80) return '#9dd80e'

    if (percentage > 50) return '#ffd42a'

    return '#FF7C01'
  }

  return (
    <Wrapper>
      <h3>Completed: {percentage}%</h3>
      <ActiveBar color={percenColor(percentage)} percentage={percentage} />
      <Bar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    margin-bottom: 3px;
  }
`

const Bar = styled.div`
  background-color: #f1f2f6;
  border-radius: 50px;
  height: 10px;
  width: 100%;
`

const ActiveBar = styled(Bar)`
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ color }) => color};
  transition: all 0.4s ease-in-out;
  position: absolute;
  left: 0;
`

export default TodoProgress
