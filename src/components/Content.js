import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: 0;
  z-index: 1;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(1rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(1rem, 1fr)
  ;
  grid-row-gap: ${props =>
    props.space === '1' ? `1rem` :
    props.space === '2' ? `2rem` :
    props.space === '3' ? `3rem` :
    props.space === '4' ? `4rem` :
    props.space === '5' ? `5rem` :
    `0`
  };
`

const Content = (props) => {

  // const [inProp, setInProp] = useState(false);
  // Need to add conditionals that stop the animation when langauge is changed
  
  return (
      <Container {...props}>
        {props.children}
      </Container>
  )
}

export default Content