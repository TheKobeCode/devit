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

export class Navigation extends Component {
  render () {
    return (
      <AuthContext.Consumer>
        {authContext => {
          const { isAuth } = authContext

          const closeLogout = e => {
            const popUp = document.querySelector('.logout')
            popUp.classList.remove('show-popup-logout')
          }

          const showPopMenu = e => {
            closeLogout()
            const popUp = document.querySelector('.menuMobile')
            popUp.classList.toggle('show-popup-menu')
          }

          const toggleLogout = e => {
            const popUp = document.querySelector('.logout')
            popUp.classList.toggle('show-popup-logout')
          }

          return (
            <Container sticky>
              <NavContainer>
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
                  <LogoStyled />
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
