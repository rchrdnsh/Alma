import styled from 'styled-components'

export default styled.div`
  margin: 0;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media (orientation: landscape) {
    padding: 4rem;
    flex-direction: row;
  }
`