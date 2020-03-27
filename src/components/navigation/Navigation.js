import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useIntl } from 'gatsby-plugin-intl'

// import Toggle from './functional/toggle'

import Links from './Links'
import Social from './Social'
import Language from './Language'

import { Button } from '../Button'

import almaBGShell from '../../images/alma/alma-bg-shell.svg'

const NavContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SmallNav = styled(motion.div)`
  margin: 0;
  padding: 1rem;
  position: fixed;
  bottom: calc(var(--vh, 1vh) * 15);
  left: 5vw;
  height: calc(var(--vh, 1vh) * 80);
  width: 90vw;
  border-radius: 16px;
  background: white;
  background-image: url(${almaBGShell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  z-index: 100;
  /* border: 1px solid red; */

  @media (orientation: landscape) {
    display: none;
  }
`

const NavBlock = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr 2fr;
  grid-column-gap: 0.5rem;
  align-self: center;
  justify-self: center;
  z-index: 10;
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0 -1rem -1rem 0;
  /* border: 1px solid red; */

  /* :first-child {
    grid-row: 1 / 9;
    grid-column: 1 / 9;
    margin: 0 -1rem -1rem 0;
    border: 1px solid tomato;
  } */

  /* :nth-child(2) {
    grid-row: 1 / 9;
    grid-column: 5 / 9;
    margin: 0 0 -1rem -1rem;
    border: 1px solid tomato;
  } */

  /* :nth-child(3) {
    grid-row: 5 / 9;
    grid-column: 1 / 5;
    margin: -1rem -1rem 0 0;
    border: 1px solid tomato;
  }

  :nth-child(4) {
    grid-row: 5 / 9;
    grid-column: 5 / 9;
    grid-template-rows: 1fr 1fr 1fr;
    margin: -1rem 0 0 -1rem;
    border: 1px solid tomato;
  } */

  @media (orientation: landscape) {
    display: none;
  }
`

const LargeNav = styled.div`
  display: none;

  @media (orientation: landscape) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: 5vh 5vh 55vh;
    grid-template-columns: 1fr 2fr 2fr;
    grid-column-gap: 0.5rem;
    align-self: center;
    justify-self: center;
    z-index: 10;
  }
`

const LargeLinkTree = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-column-gap: 0.5rem;
    align-self: center;
    justify-self: center;
`

const MenuButton = styled(Button)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 100;
  /* min-width: 8rem;
  max-width: 8rem; */

  @media (orientation: landscape) {
    display: none
  }
`

const Locales = styled.div`
  margin: 0.5rem;
  /* grid-row: 3 / 4; */
  grid-column: 1 / 4;
  align-self: center;
  z-index: 2;
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;

  @media (orientation: landscape) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    align-self: center;
    display: flex;
    justify-content: center;
    z-index: 1000;
  }
`

const DownArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  grid-row: 8 / 9;
  grid-column: 2 / 3;
  margin-bottom: -32px;
  margin-left: -32px;
  align-self: end;
`

const Navigation = () => {

  // const intl = useIntl()
  // const t = intl.formatMessage

  const navRef = useRef();

  const [ isToggled, setToggle ] = useState(false);

  const toggle = () => setToggle(!isToggled);

  const handleClick = e => {
    if (navRef.current.contains(e.target)) {
      return;
    }
    setToggle(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <NavContainer ref={navRef}>

        {
          !isToggled ?
          (
            <MenuButton onClick={toggle}>Menu</MenuButton>
          ) : (
            <MenuButton onClick={toggle}>Close</MenuButton>
          )
        }

        <AnimatePresence>
          {isToggled &&
            <SmallNav
              initial={{
                opacity: 0,
                scale: 0.1,
                x: -100,
                y: 250,
                transition: { 
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
              animate={{
                opacity: 1,
                scale: 1.0,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
              exit={{
                opacity: 0,
                scale: 0.1,
                x: -100,
                y: 250,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }
              }}
            >
              <NavBlock>
                <Links toggle={toggle}/>
                <Social/>
                <Locales>
                  <Language />
                </Locales>
              </NavBlock>
              <DownArrow />
            </SmallNav>
          }
        </AnimatePresence>
      </NavContainer>

      <LargeNav>
        <Locales>
          <Language />
        </Locales>
        <Social/>
        <LargeLinkTree>
          <Links toggle={toggle}/>
        </LargeLinkTree> 
      </LargeNav>
    </>
  )
}

export default Navigation