import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import { NavLink } from 'react-router-dom'

export const BasicAnchor = styled.a`
  font-size: ${theme.textMetrics.buttonNormal};
  color: ${theme.colors.linkColor};
  text-decoration: none;
  cursor: pointer;
  padding: ${props => props.padding || '0'};

  ${props =>
    props.small &&
    css`
      font-size: ${theme.textMetrics.smallText};
    `}
`

export const LinkAnchor = styled(NavLink)`
  font-size: ${theme.textMetrics.buttonNormal};
  color: ${theme.colors.linkColor};
  text-decoration: none;
  cursor: pointer;
  padding: ${props => props.padding || '0 0 0 35px'};
  :first-child {
    padding-left: 0;
  }
  transition: all 0.3s ease;

  ${props =>
    props.small &&
    css`
      font-size: ${theme.textMetrics.smallText};
    `}

  ${props =>
    props.specialhero &&
    css`
      padding: 5px 20px;
      margin: 20px auto;
      color: ${theme.colors.purpleColor} !important; 
      border: solid 1px ${theme.colors.purpleColor};
      border-radius: 4px;

      :hover {
        color: white !important;
        background-color: ${theme.colors.purpleColor};
      }

      @media only screen and (min-width: 1024px) {
        margin: 20px 0;
      }
    `}

  @media only screen and (min-width: 1024px) {
    color: ${theme.colors.lightTextColor};
    font-weight: ${theme.fontMetrics.link};

    :hover {
      color: ${theme.colors.linkColor};
    }

    ${props =>
      props.special &&
      css`
        padding: 5px 20px;
        margin-left: 25px;
        border: solid 1px ${theme.colors.lightTextColor};
        border-radius: 4px;

        :hover {
          color: ${theme.colors.linkColor};
          border: solid 1px ${theme.colors.linkColor};
        }
      `}
  }
`

export const ButtonAnchor = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${theme.textMetrics.buttonNormal};
  color: ${theme.colors.textColor};
  text-decoration: none;
  cursor: pointer;
  padding: ${props => props.padding || '0 0 0 35px'};
  :first-child {
    padding-left: 0;
  }
  transition: all 0.3s ease;

  ${props =>
    props.small &&
    css`
      font-size: ${theme.textMetrics.smallText};
    `}

  @media only screen and (min-width: 1024px) {
    color: ${theme.colors.lightTextColor};
    font-weight: ${theme.fontMetrics.link};

    :hover {
      color: ${theme.colors.linkColor};
    }

    ${props =>
      props.redhover &&
      css`
        :hover {
          color: ${theme.colors.purpleColor};
        }
      `}

    ${props =>
      props.special &&
      css`
        padding: 5px 20px;
        margin-left: 25px;
        border: solid 1px ${theme.colors.lightTextColor};
        border-radius: 4px;

        :hover {
          color: ${theme.colors.linkColor};
          border: solid 1px ${theme.colors.linkColor};
        }
      `}
  }
`
