// import React, { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, rgba(45,101,142,1) 0%, rgba(81,168,190,1) 100%);
  border: 2px solid #AF875D;
  color: white;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(10px + (40 - 10) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(10px + (40 - 10) * ((100vw - 300px) / (1600 - 300)));
  padding:
    calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)))
    calc(16px + (48 - 16) * ((100vw - 300px) / (1600 - 300)))
  ;
  padding-right: -4px;
  align-self: center;
  justify-self: center;
  text-shadow: 1px 1px hsla(0, 0%, 0%, 0.25);
  border-radius: 32px;
  outline: none;
  z-index: 100;
  -webkit-tap-highlight-color: transparent;
  transition: background 500ms ease;

  :hover {
    background: linear-gradient(0deg, hsla(205, 58%, 33%, 1) 0%, hsla(192, 43%, 49%, 1) 100%);
    color: #eee;
    cursor: pointer;
    outline: none;
  }

  :active {
    outline: none;
    /* box-shadow: 0px 0px 8px rgba(0, 0, 200, 0.5); */
  }

  :focus {
    outline: none;
    /* box-shadow: 0px 0px 8px rgba(0, 0, 200, 0.5); */
  }

  @media (orientation: landscape) {
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding: 
      calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300))) 
      calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)))
    ;
  }
`

export { Button }