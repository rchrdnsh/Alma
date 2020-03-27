import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useIntl } from 'gatsby-plugin-intl'

// import Toggle from './functional/toggle'

import Links from './Links'
import Social from './Social'
import Language from './Language'

import { Button } from '../Button'

import almaBGShell from '../images/alma/alma-bg-shell.svg'
// import almaShell from '../images/alma/alma-shell.svg'

// import FacebookIcon from '../images/social/facebook-button.svg'
// import InstagramIcon from '../images/social/instagram-button.svg'
// import TwitterIcon from '../images/social/twitter-button.svg'
// import YouTubeIcon from '../images/social/youtube-button.svg'

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

// const AlmaLink = styled(Link)`
//   grid-column: 2 / 4;
//   white-space: nowrap;
//   text-decoration: none;
//   font-family: 'Open Sans', sans-serif;
//   font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
//   font-weight: 300;
//   margin: 0.4rem;
//   padding: 0.25rem 0;
//   line-height: 0.75;
//   color: #2d658e;

  /* :focus {
    background: hsla(207, 55%, 69%, 0.2);
    border-radius: 32px;
    box-shadow: inset 0 0 8px hsla(0,0%,0%,0.25);
  } */

//   @media (orientation: landscape) {
//     font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
//     grid-column: 2 / 4;
//     line-height: 1.25;
//     margin: 0.25rem;
//     padding: 0.25rem 0;
//   }
// `

// const AlmaLink2 = styled(Link)`
//   grid-column: 2 / 4;
//   margin: 0.4rem;
//   padding: 0.25rem 0;
//   text-decoration: none;
//   white-space: nowrap;
//   font-family: 'Open Sans', sans-serif;
//   font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
//   font-weight: 300;
//   line-height: 1;
//   color: grey;

//   @media (orientation: landscape) {
//     grid-column: 2 / 4;
//     font-size: calc(8px + (16 - 8) * ((100vw - 300px) / (1600 - 300)));
//     line-height: 1.25;
//     margin: 0.25rem;
//     padding: 0.25rem 0;
//   }
// `

// const AlmaBulletShell = styled.img`
//   padding: 0;
//   width: 0.9rem;
//   height: auto;
//   grid-column: 1 / 2;
//   align-self: center;
//   justify-self: center;

//   @media (orientation: landscape) {
//     grid-column: 1 / 2;
//     margin-bottom: 0px;
//   }
// `

// const SocialButtons = styled.div`
//   /* margin: 0 0 -1rem -1rem; */
//   margin: 0.5rem;
//   padding: 0;
//   grid-column: 1 / 4;
//   /* grid-row: 2 / 3; */
//   align-self: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;

//   @media (orientation: landscape) {
//     margin: 0;
//     grid-column: 1 / 4;
//     grid-row: 2 / 3;
//     align-self: center;
//   }
// `

// const SocialButton = styled.a`
//   margin: 0;
//   padding: 0;
//   height: 32px;
//   width: 32px;

//   > img {
//     margin-bottom: 0;
//     padding: 0;
//     height: 32px;
//     width: 32px;
//   }
// `

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

  const intl = useIntl()
  const t = intl.formatMessage

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
                {/* <AlmaBulletShell src={almaShell}/>
                <AlmaLink to={`/resort`} onClick={toggle}>{t({ id: "nav-resort" })}</AlmaLink>
                  <AlmaLink2 to={`/villas`} onClick={toggle}>{t({ id: "nav-villas" })}</AlmaLink2>
                  <AlmaLink2 to={`/condos`} onClick={toggle}>{t({ id: "nav-apartments" })}</AlmaLink2>
                  <AlmaLink2 to={`/restaurants`} onClick={toggle}>{t({ id: "nav-restaurants" })}</AlmaLink2>
                  <AlmaLink2 to={`/amenities`} onClick={toggle}>{t({ id: "nav-amenities" })}</AlmaLink2>
                  <AlmaLink2 to={`/news`} onClick={toggle}>{t({ id: "nav-news" })}</AlmaLink2>
                <AlmaBulletShell src={almaShell}/>
                <AlmaLink to={`/vacations`} onClick={toggle}>{t({ id: "nav-vacations" })}</AlmaLink>
                <AlmaBulletShell src={almaShell}/>
                <AlmaLink to={`/alma`} onClick={toggle}>{t({ id: "nav-about-alma" })}</AlmaLink>
                <AlmaBulletShell src={almaShell}/>
                <AlmaLink to={`/showroom`} onClick={toggle}>{t({ id: "nav-showroom" })}</AlmaLink> */}
                {/* <AlmaBulletShell src={almaShell}/>
                <AlmaLink to={`/careers`} onClick={toggle}>Careers</AlmaLink> */}
                {/* <SocialButtons>
                  <SocialButton href='https://www.facebook.com/almavacations' target="_blank">
                    <img src={FacebookIcon} alt='The Alma Resort Facebook account.' />
                  </SocialButton>
                  <SocialButton href='https://www.instagram.com/almavacations' target="_blank">
                    <img src={InstagramIcon} alt='The Alma Resort Instagram account.' />
                  </SocialButton>
                  <SocialButton href='https://www.twitter.com/almavacations' target="_blank">
                    <img src={TwitterIcon} alt='The Alma Resort Twitter account.' />
                  </SocialButton>
                  <SocialButton href='https://www.youtube.com/channel/UCMzsbNMXxwVTLOUZr_3lZWw' target="_blank">
                    <img src={YouTubeIcon} alt='The Alma Resort YouTube account.' />
                  </SocialButton>
                </SocialButtons> */}
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
        {/* <SocialButtons>
          <SocialButton href='https://www.facebook.com/almavacations' target="_blank">
            <img src={FacebookIcon} alt='The Alma Resort Facebook account.' />
          </SocialButton>
          <SocialButton href='https://www.instagram.com/almavacations' target="_blank">
            <img src={InstagramIcon} alt='The Alma Resort Instagram account.' />
          </SocialButton>
          <SocialButton href='https://www.twitter.com/almavacations' target="_blank">
            <img src={TwitterIcon} alt='The Alma Resort Twitter account.' />
          </SocialButton>
          <SocialButton href='https://www.youtube.com/channel/UCMzsbNMXxwVTLOUZr_3lZWw' target="_blank">
            <img src={YouTubeIcon} alt='The Alma Resort YouTube account.' />
          </SocialButton>
        </SocialButtons> */}
        <LargeLinkTree>
          <Links toggle={toggle}/>
          {/* <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/resort`}>{t({ id: "nav-resort" })}</AlmaLink>
            <AlmaLink2 to={`/villas`}>{t({ id: "nav-villas" })}</AlmaLink2>
            <AlmaLink2 to={`/condos`}>{t({ id: "nav-apartments" })}</AlmaLink2>
            <AlmaLink2 to={`/restaurants`}>{t({ id: "nav-restaurants" })}</AlmaLink2>
            <AlmaLink2 to={`/amenities`}>{t({ id: "nav-amenities" })}</AlmaLink2>
            <AlmaLink2 to={`/news`}>{t({ id: "nav-news" })}</AlmaLink2>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/vacations`}>{t({ id: "nav-vacations" })}</AlmaLink>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/alma`}>{t({ id: "nav-about-alma" })}</AlmaLink>
          <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/showroom`}>{t({ id: "nav-showroom" })}</AlmaLink> */}
          {/* <AlmaBulletShell src={almaShell}/>
          <AlmaLink to={`/careers`}>Careers</AlmaLink> */}
        </LargeLinkTree> 
      </LargeNav>
    </>
  )
}

export default Navigation