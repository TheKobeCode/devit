import React, { Component } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import { LogoStyled } from '../styledComponents/LogoStyled'
import {
  BasicAnchor,
  LinkAnchor,
  ButtonAnchor
} from '../styledComponents/Anchors'
import { NavContainer } from '../styledComponents/NavContainer'
import { Container } from '../styledComponents/Container'
import { DynamicBox } from '../styledComponents/DynamicBox'
import { MenuIcon, MenuDesktopIcon } from '../styledComponents/MenuIcon'
import { LinksNav, DesktopLinksNav } from '../styledComponents/LinksNav'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
  render () {
    return (
      <AuthContext.Consumer>
        {authContext => {
          const { isAuth } = authContext

          const showPopMenu = e => {
            const popUp = document.querySelector('.menuMobile')
            popUp.classList.toggle('show-popup-menu')
          }

          const toggleLogout = e => {
            const popUp = document.querySelector('.logout')
            popUp.classList.toggle('show-popup-logout')
          }

          return (
            <Container sticky>
              <NavContainer
                initial={{ translateY: -5, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: 5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <DynamicBox justifycontent='flex-start'>
                  <BasicAnchor
                    small
                    href='https://github.com/TheKobeCode/devit'
                    target='blank'
                  >
                    GitHub
                  </BasicAnchor>
                </DynamicBox>
                <DynamicBox justifycontent='center'>
                  {!isAuth ? (
                    <Link to='/'>
                      <LogoStyled />
                    </Link>
                  ) : (
                    <Link to='/devits'>
                      <LogoStyled />
                    </Link>
                  )}
                </DynamicBox>
                <DynamicBox justifycontent='flex-end'>
                  <MenuIcon onClick={showPopMenu}>
                    <div />
                    <div />
                    <div />
                  </MenuIcon>
                  {!isAuth ? (
                    <LinksNav className='menuMobile'>
                      <LinkAnchor exact activeClassName='active' to='/'>
                        Home
                      </LinkAnchor>
                      <LinkAnchor exact activeClassName='active' to='/signin'>
                        Sign In
                      </LinkAnchor>
                      <LinkAnchor
                        special='true'
                        exact
                        activeClassName='active'
                        to='/signup'
                      >
                        Sign Up
                      </LinkAnchor>
                    </LinksNav>
                  ) : (
                    <LinksNav className='menuMobile'>
                      <LinkAnchor exact activeClassName='active' to='/devits'>
                        Devits
                      </LinkAnchor>
                      <LinkAnchor exact activeClassName='active' to='/profile'>
                        Profile
                      </LinkAnchor>
                      <LinkAnchor
                        special='true'
                        exact
                        activeClassName='active'
                        to='/dashboard'
                      >
                        Dashboard
                      </LinkAnchor>
                      <MenuDesktopIcon onClick={toggleLogout}>
                        <div />
                        <div />
                      </MenuDesktopIcon>
                      <DesktopLinksNav className='logout'>
                        <ButtonAnchor redhover='true'>Sign Out</ButtonAnchor>
                      </DesktopLinksNav>
                    </LinksNav>
                  )}
                </DynamicBox>
              </NavContainer>
            </Container>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}
