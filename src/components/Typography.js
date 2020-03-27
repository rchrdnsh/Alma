import styled from 'styled-components'

const A = styled.a`
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
`

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 4px;
  color: #be854d;
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
`

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  color: #be854d;
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
`

const H3 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  color: #be854d;
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
`

const P = styled.p`
  margin: 0;
  padding: 0;
  color: #006897;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)));
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}

  @media (orientation: landscape) {
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(28px + (40 - 28) * ((100vw - 300px) / (1600 - 300)));
  }
`

const UL = styled.ul`
  font-family: 'Open Sans', sans-serif;
  margin: 2rem;
  padding: 0;
  color: #006897;
  /* background: -webkit-linear-gradient(#006674, #004566); */
  /* -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  list-style-type: circle;
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
`

const ListTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  letter-spacing: 2px;
  color: #be854d;
  /* -webkit-text-fill-color: #be854d; */
`

const LI = styled.li`
  color: #006897;
  font-family: 'Open Sans', sans-serif;
  list-style-type: disc;
  font-size: 16px;
  padding: 0.25rem;

  @media (orientation: landscape) {
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(28px + (40 - 28) * ((100vw - 300px) / (1600 - 300)));
  }
`

export { A, H1, H2, H3, P, UL, ListTitle, LI }