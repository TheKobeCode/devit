import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const Input = styled.input`
  width: auto;
  padding: 15px;
  border: none;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 25px;
  border-radius: 5px;
  font-size: ${theme.textMetrics.body1};
  outline: none;
  transition: all .25s ease;

  :focus {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  }

  ${props =>
    props.inputlast &&
    css`
      margin-bottom: 45px;
    `}

  ${props =>
    props.inputsubmit &&
    css`
      width: 70%;
      margin: 0 auto;
      padding: 8px 10px;
      cursor: pointer;
      border: solid 1px ${theme.colors.purpleColor};
      background-color: transparent;
      font-weight: ${theme.fontMetrics.link};
      color: ${theme.colors.purpleColor};
      transition: all .25s ease;

      :hover {
        border: solid 1px ${theme.colors.purpleColor};
        background-color: ${theme.colors.purpleColor};
        color: white;
      }
    `}
`
