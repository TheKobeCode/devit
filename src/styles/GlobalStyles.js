import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: ${theme.font.principalFont};
  }

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  .active {
    color: ${theme.colors.linkColor};
  }

  .show-popup-menu {
    top: 100px !important;
    pointer-events: all !important;
    opacity: 1 !important;

    @media only screen and (min-width: 1024px) {
      top: 55px !important;
    }
  }

  .show-popup-logout {
    top: 55px !important;
    pointer-events: all !important;
    opacity: 1 !important;

    @media only screen and (min-width: 1024px) {
      top: 100px !important;
    }
  }
`
