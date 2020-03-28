import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Scroll = styled.div`
  margin: 0;
  padding: 0;
  grid-row: 7 / 8;
  grid-column: 1 / 9;
  z-index: 5;
  color: white;
  font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  line-height: 1;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.5);
  align-self: end;
  justify-self: center;
`

const AnimatedArrow = styled(motion.div)`
  /* border: 1px solid red; */
  margin: 0;
  padding: 0;
  grid-row: 8 / 9;
  grid-column: 1 / 9;
  z-index: 5;
  color: white;
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  line-height: 1;
  text-shadow: 0px 0px 8px rgba(0,0,0,0.5);
  align-self: start;
  justify-self: center;
`

const Arrow = () => {
  return (
    <>
      <Scroll>Scroll</Scroll>
        <AnimatedArrow
          animate={{ y: 16 }}
          transition={{ from: 0, flip: Infinity, duration: 1.5 }}
        >
          <svg width="50" height="25" viewBox="-3.5 -4 24 24" preserveAspectRatio="xMidYMid meet">
            <path d="M0,0 l8,10 l8,-10" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </AnimatedArrow>
    </>
  )
}

export default Arrow
