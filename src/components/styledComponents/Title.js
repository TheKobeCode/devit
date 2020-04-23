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
`
