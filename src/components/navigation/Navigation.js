import React, { Component } from 'react'

import history from '../../utils/history'
import firebase from 'firebase/app'
import 'firebase/auth'

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
          const { isAuth, toggleAuth } = authContext

          const showPopMenu = e => {
            const popUp = document.querySelector('.menuMobile')
            popUp.classList.toggle('show-popup-menu')
          }

          const toggleLogout = e => {
            const popUp = document.querySelector('.logout')
            popUp.classList.toggle('show-popup-logout')
          }

          const closeMenu = e => {
            const popUp = document.querySelector('.menuMobile')
            popUp.classList.remove('show-popup-menu')
          }

          const signOut = e => {
            e.preventDefault()
            firebase
              .auth()
              .signOut()
              .then(() => {
                toggleAuth()
                history.push('/')
              })
            closeMenu()
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
                    href='https://github.com/TheKobeCode/codebit'
                    target='blank'
                  >
                    GitHub
                  </BasicAnchor>
                </DynamicBox>
                <DynamicBox justifycontent='center'>
                  {!isAuth ? (
                    <Link onClick={closeMenu} to='/'>
                    <LogoStyled onClick={closeMenu} />
                  </Link>
                  ) : (
                    <Link onClick={closeMenu} to='/devits'>
                      <LogoStyled onClick={closeMenu} />
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
                      <LinkAnchor
                        onClick={closeMenu}
                        exact
                        activeClassName='active'
                        to='/'
                      >
                        Home
                      </LinkAnchor>
                      <LinkAnchor
                        onClick={closeMenu}
                        exact
                        activeClassName='active'
                        to='/signin'
                      >
                        Sign In
                      </LinkAnchor>
                      <LinkAnchor
                        onClick={closeMenu}
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
                      <LinkAnchor
                        onClick={closeMenu}
                        exact
                        activeClassName='active'
                        to='/codebits'
                      >
                        CodeBits
                      </LinkAnchor>
                      <LinkAnchor
                        onClick={closeMenu}
                        exact
                        activeClassName='active'
                        to='/profile'
                      >
                        Profile
                      </LinkAnchor>
                      <LinkAnchor
                        onClick={closeMenu}
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
                        <ButtonAnchor onClick={signOut} redhover='true'>
                          Sign Out
                        </ButtonAnchor>
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
