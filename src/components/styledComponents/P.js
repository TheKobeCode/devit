import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const P = styled.p`
  width: ${props => props.width};
  font-size: ${theme.textMetrics.body1};
  color: ${theme.colors.textColor};
  text-align: ${props => props.textalign || 'inherit'};
  margin: ${props => props.margin || '10px 25px'};
  line-height: 26px;

  ${props =>
    props.formp &&
    css`
      width: 100%;
      margin: 10px auto 35px auto;
      text-align: center;

      @media only screen and (min-width: 768px) {
        width: 85%;
      }

      @media only screen and (min-width: 1024px) {
        width: calc(100% - 50%);
        margin: 10px auto 50px auto;
      }

      @media only screen and (min-width: 1280px) {
        width: calc(100% - 60%);
      }
    `}
`
