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
    
  ${props =>
    props.specialheader &&
    css`
      text-align: center;
      margin: 0px 0 25px 0;

      @media only screen and (min-width: 1024px) {
        text-align: start;
        width: 85%;
      }
    `}


  ${props =>
    props.errormessage &&
    css`
      color: ${theme.colors.redColor};
      margin-top: 10px;
      font-size: ${theme.textMetrics.smallText};
      text-align: center;
    `}

    ${props =>
      props.resetpasswordbtn &&
      css`
        color: ${theme.colors.lightTextColor};
        margin-top: 20px;
        font-size: ${theme.textMetrics.smallText};
        text-align: center;
        cursor: pointer;

        :hover {
          color: ${theme.colors.textColor};
        }
      `}

      ${props =>
        props.success &&
        css`
          color: ${theme.colors.greenColor};
          margin-top: 10px;
          font-size: ${theme.textMetrics.greenColor};
          text-align: center;
        `}
`
