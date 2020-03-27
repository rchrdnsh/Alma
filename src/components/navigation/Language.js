import React from "react"
import styled from 'styled-components';
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Button } from '../Button'

const LocaleButton = styled(Button)`
  border-radius: 0 0 0 0;
  padding: 4px;
  min-width: 48px;
  font-size: 10px;
  max-height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :first-child {
    border-radius: 16px 0 0 16px;
    border-right: 1px;
  }

  :last-child {
    border-radius: 0 16px 16px 0;
    /* border-left: 1px; */
  }

  @media (orientation: landscape) {
    font-size: 10px;
    line-height: 1;
    padding: 4px;
  }
`;

const languageName = {
  en: "EN",
  vi: "VI"
}

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <LocaleButton
              key={language}
              onClick={() => changeLocale(language)}
            >
              {languageName[language]}
            </LocaleButton>
          ))
        }
      </IntlContextConsumer>
    </>
  )
}

export default Language