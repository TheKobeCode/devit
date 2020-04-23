import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const Title = styled.h2`
  color: ${theme.colors.principalColor};
  margin: ${props => props.margin || '15px 0'};

  ${props =>
    props.heading1 &&
    css`
      font-size: ${theme.textMetrics.heading1};
    `};

  ${props =>
    props.bigtitle &&
    css`
      font-size: 1.6rem;
      margin: 25px auto;
      text-align: center;


      @media only screen and (min-width: 768px) {
        font-size: 3rem;
      }

      @media only screen and (min-width: 1024px) {
        text-align: start;
        margin: 25px 0;
      }
    `}
`
