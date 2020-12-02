import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .horiz-center {
    width: fit-content;
    margin: auto;
  }
  .center-align {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .grid-item {
    grid-row: 1;
  }
`

export default GlobalStyle
