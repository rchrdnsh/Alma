import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
// import { useTransition, animated } from 'react-spring'
import { motion, AnimatePresence } from 'framer-motion'
import { injectIntl } from 'gatsby-plugin-intl'

import { P } from './visual/Typography'

import { Button } from '../components/visual/Button'

// import almaBGShell from '../images/alma/alma-bg-shell.svg'
import lifestyleImage from '../images/lifestyle/lifestyle-1.jpg'

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled(motion.form)`
  margin: 0;
  padding: 1rem;
  position: fixed;
  bottom: calc(var(--vh, 1vh) * 15);
  left: 5vw;
  height: calc(var(--vh, 1vh) * 80);
  width: 90vw;
  border-radius: 16px;
  background: white;
  background-image: url(${lifestyleImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;
  border: 10px solid white;

  @media (min-width: 50rem) {
    margin: 0 0 1rem 2rem;
    padding: 2rem;
    left: 20vw;
    top: auto;
    width: 52rem;
    height: 40rem;
    bottom: 0;
    grid-template-rows: repeat(5, 1fr);
  }
`

const DownArrow = styled.div`
  width: 0; 
  height: 0;
  /* border-bottom: 20px solid transparent; */
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  grid-row: 8 / 9;
  grid-column: 8 / 9;
  margin-bottom: -40px;
  /* margin-bottom: -4vh; */
  margin-left: -2vw;
  align-self: end;

  @media (min-width: 50rem) {
    grid-row: 5 / 6;
    grid-column: 1 / 2;
    /* border-left: 0; */
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent; 
    border-right: 20px solid white;
    margin: 0;
    margin-left: -72px;
    /* margin-bottom: 64px; */
  }
`

const JoinButton = styled(Button)`
  /* grid-column: 3 / 4;
  grid-row: 1 / 2; */
  z-index: 100;

  @media (min-width: 50rem) {
    font-size: 24px;
    padding: 12px 16px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    font-size: 16px;
    line-height: 1;
  }
`

// const LargeContact = styled.div`
//   margin: 1rem;
//   padding: 1rem;
//   grid-row: 3 / 4;
//   background: white;
//   border-radius: 16px;
//   box-shadow: 0px 0px 8px hsla(0, 0%, 0%, 0.1);
// `

const Label = styled.label`
  grid-column: 1 / 9;
  display: block;
  margin: 0;
  padding: 1rem;
  color: white;
`

const Input = styled.input`
  grid-column: 1 / 9;
  margin: 0.25rem 0 0 0;
  padding: 1rem;
  display: block;
  width: 100%;
  height: 24px;
  font-size: 16px;
  border: 1px solid #006674;
  border: 1px solid hsla(0,0%,0%,0.25);
  background: hsla(0,0%,0%,0.5);
  border-radius: 4px;
  /* opacity: 0.25; */
  color: white;

  /* :focus {
    color: white;
  } */
`

const SubmitButton = styled(Button)`
  grid-column: 1 / 9;
  grid-row: 5 / 6;
  align-self: center;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1;
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  padding: 16px 24px;
  vertical-align: baseline;
  color: black;
  background: white;
  border: none;
  box-shadow: 0px 0px 16px hsla(0,0%,0%,0.5);
  text-shadow: none;

  :hover {
    background: white;
    color: black;
  }

  :active {
    background: white;
    color: black;
  }

  :focus {
  }
`

// const Message = styled(P)`
//   grid-column: 1 / 9;
//   margin: 0 1rem 0 1rem;
//   padding: 1rem;
//   align-self: stretch;
//   justify-self: stretch;
//   background: white;
//   border: 1px solid red;
//   color: white;
//   font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
//   line-height: 1.5;
//   font-weight: 800;
//   text-shadow: 0px 0px 8px hsla(0,0%,0%,1);
// `

const Contact = () => {

  // const joinRef = useRef();

  // const [ isToggled, setToggle ] = useState(false);

  // const toggle = () => setToggle(!isToggled);

  // const handleClick = e => {
  //   if (joinRef.current.contains(e.target)) {
  //     return;
  //   }
  //   setToggle(false);
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  return (
    <Fragment>
      {/* <FormContainer ref={joinRef}>

        {
          !isToggled ?
          (
            <JoinButton onClick={toggle}>Promo</JoinButton>
          ) : (
            <JoinButton onClick={toggle}>Close</JoinButton>
          )
        }

       <AnimatePresence>
          {isToggled &&
            <Form
              initial={{
                opacity: 0,
                scale: 0.1,
                // x: -500,
                x: '30vw',
                y: '35vh',
                transition: { 
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
              animate={{
                opacity: 1,
                scale: 1.0,
                x: '0vw',
                y: '0vh',
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
              exit={{
                opacity: 0,
                scale: 0.1,
                // x: -500,
                x: '30vw',
                y: '35vh',
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
              name="contact-form"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="contact-form" value="contact"/>
              <Message>
                Don’t miss out on a chance to win your next exotic getaway! Enter now!
              </Message>
              <Label>Name : <Input name="name" type="text"/></Label>   
              <Label>Email : <Input name="email" type="email"/></Label>
              <Label>Number : <Input name="phone" type="tel"/></Label>
              <SubmitButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
              >
                Submit
              </SubmitButton>
              <DownArrow />
            </Form>        
          }
        </AnimatePresence>
      </FormContainer> */}
    </Fragment>
  )

}

export default injectIntl(Contact)