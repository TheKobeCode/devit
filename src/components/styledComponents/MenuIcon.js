import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const MenuIcon = styled.div`
  width: 35px;
  height: 7px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  div {
    border-radius: 50%;
    background-color: ${theme.colors.principalColor};
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const MenuDesktopIcon = styled.div`
  width: 17.5px;
  height: 7px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  margin-left: 20px;
  cursor: pointer;

  div {
    border-radius: 50%;
    background-color: ${theme.colors.principalColor};
  }
`
