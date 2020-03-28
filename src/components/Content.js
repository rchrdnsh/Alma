import React, { useState } from 'react'
import styled from 'styled-components'
// import { Transition } from 'react-transition-group'
// import { motion, AnimatePresence } from 'framer-motion'

// const duration = 1000;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered:  { opacity: 1 },
//   exiting:  { opacity: 0 },
//   exited:  { opacity: 0 },
// };


// const Container = styled(motion.div)`
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
    // <Transition in={inProp} timeout={duration}>
    //   {state => (
    //     <Container {...props} style={{
    //       ...defaultStyle,
    //       ...transitionStyles[state]
    //     }}>
    //       {props.children}
    //     </Container>
    //   )}
    // </Transition>
    // <AnimatePresence exitBeforeEnter>
    //   <Container
    //     {...props}
    //     initial={{
    //       opacity: 0
    //     }}
    //     animate={{
    //       opacity: 1,
    //       transition: { 
    //         delay: 0.5,
    //         duration: 0.5
    //       }
    //     }}
    //     exit={{
    //       opacity: 0,
    //       transition: { 
    //         delay: 0,
    //         duration: 0.5
    //       }
    //     }}
    //   >
      <Container {...props}>
        {props.children}
      </Container>
    // </AnimatePresence>
  )
}

export default Content