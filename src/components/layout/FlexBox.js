import styled from 'styled-components'

export default styled.div`
  margin: 0;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media (orientation: landscape) {
    width: 50%;
  }
`