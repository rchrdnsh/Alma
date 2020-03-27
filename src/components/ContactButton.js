import React, { useState, useEffect, useRef, Fragment } from 'react'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'

import { Button } from './Button'

const ContactButton = styled(Button)`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  z-index: 100;
  /* min-width: 8rem;
  max-width: 8rem; */

  @media (orientation: landscape) {
    font-size: 24px;
    padding: 12px 16px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    font-size: 16px;
    line-height: 1;
  }
`

const Contact = ({ intl }) => {

  const contactRef = useRef();

  const [ isToggled, setToggle ] = useState(false);

  const toggle = () => setToggle(!isToggled);

  const handleClick = e => {
    if (contactRef.current.contains(e.target)) {
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
    <div ref={contactRef}>
      {
        !isToggled ?
        (
          <Link to={`/contact`}>
            <ContactButton onClick={toggle}>{intl.formatMessage({ id: "nav-contact" })}</ContactButton>
          </Link>
        ) : (
          <Link to={`/`}>
            <ContactButton onClick={toggle}>{intl.formatMessage({ id: "close-button" })}</ContactButton>
          </Link>
        )
      }
    </div>
  )
}

export default injectIntl(Contact)





