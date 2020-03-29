// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import Transition from './Transition'

import almaLogo from '../images/alma/alma-logo.svg'
import almaShell from '../images/alma/alma-shell.svg'

import './Layout.css'

// import AnimatedLogo from './AnimatedLogo'

import Logo from './Logo'
import Navigation from './navigation/Navigation'
// import Contact from './ContactButton'

const ShellBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background: white;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;

  @media (orientation: landscape) {
    height: 100vh;
  }
`

const AlmaShell = styled.img`
  margin: 0;
  padding: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  width: 6rem;
  height: auto;
  z-index: 0;
  opacity: 0;
  animation: fadeInShell ease 4s;
  animation-delay: 0s;
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;

  @keyframes fadeInShell {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media(orientation: landscape) {
    width: 12rem;
  }
`

const App = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 1;
  animation: fadeInApp ease 2s;
  animation-delay: 2s;
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-rows:
    calc(var(--vh, 1vh) * 20)
    calc(var(--vh, 1vh) * 70) 
    calc(var(--vh, 1vh) * 10)
  ;
  grid-template-columns: repeat(3, 1fr);

  @keyframes fadeInApp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (orientation: landscape) {
    grid-template-rows: 100vh;
    grid-template-columns: 20vw 80vw;
  }
`

const Main = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 3;
  
  box-shadow: 0px 0px 16px hsla(0,0%,0%,1);

  @media (orientation: landscape) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
    /* overflow-x: hidden;
    overflow-y: scroll; */
    overflow-x: initial;
    overflow-y: initial;
    position: relative;
  }
`

const AlmaLogo = styled.img`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  width: 8rem;
  height: auto;
  z-index: 2;
  opacity: 0.4;
  
  @media (orientation: landscape) {
    position: fixed;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    height: 100vh;
    width: 80vw;
    height: calc(var(--vh, 1vh) * 100);
    width: 16rem;
    z-index: 1;
  }
`

const Menu = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1000;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-items: center;

  @media (orientation: landscape) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-rows: 20vh 65vh 15vh;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    z-index: 100;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
    background-repeat: repeat;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    box-shadow:
      0 15px 30px 0 rgba(0,0,0,0.11),
      0 5px 15px 0 rgba(0,0,0,0.08)
    ;
  }
`

const Layout = ({ children, location: { pathname, hash } }) => {

  // ----------------------------------------------------------------
  // custom scroll  position logic
  // ----------------------------------------------------------------

  useEffect(() => {
    if (pathname.includes('careers')) {
      if (hash === '#office-manager') {
        const officeManager = document.querySelector('#office-manager').offsetTop
        document.querySelector('#main').scrollTop = officeManager
      } else if (hash ==='#administrative-assistant') {
        const administrativeAsistant = document.querySelector('#administrative-assistant').offsetTop
        document.querySelector('#main').scrollTop = administrativeAsistant
      } else if (hash ==='#vacation-counselor') {
        const vacationCounselor = document.querySelector('#vacation-counselor').offsetTop
        document.querySelector('#main').scrollTop = vacationCounselor
      } else if (hash ==='#event-staff') {
        const eventStaff = document.querySelector('#event-staff').offsetTop
        document.querySelector('#main').scrollTop = eventStaff
      } else {
        setTimeout(() => document.querySelector('#main').scrollTop = 0, 500)
      }
    } else {
      setTimeout(() => document.querySelector('#main').scrollTop = 0, 500)
      // window.setTimeout(() => window.scrollTo(0,0), 500)
    }
  }, [hash, pathname])

  // useEffect(() => {
  //   setTimeout(() => document.querySelector('#main').scrollTop = 0, 500)
  // }, [])

  // useEffect(() => {
  //   window.setTimeout(() => window.scrollTo(0,0), 500)
  // }, [])

  // ----------------------------------------------------------------
  // for the framer-motion animated logo
  // ----------------------------------------------------------------

  // const [ visible, setVisible] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setVisible(false), 5000)
  // }, []);

  // ----------------------------------------------------------------
  // component
  // ----------------------------------------------------------------


  return (
    <>
      <ShellBox>
        <AlmaShell src={almaShell} alt='The Alma Shell Logo'/>
      </ShellBox>
      {/* { visible && <AnimatedLogo/> } */}
      <App>
        <AlmaLogo src={almaLogo} alt='The Alma Logo'/>
        <Menu>
          <Logo/>
          <Navigation/>
          {/* <Contact/> */}
        </Menu>
        <Main id='main'>
          <Transition location={window.location}>
            {children}
          </Transition>
        </Main>
      </App>
    </>
  )
}

export default Layout
