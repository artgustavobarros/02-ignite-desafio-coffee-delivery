import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.base_text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, ul,li {
    ${mixins.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`
