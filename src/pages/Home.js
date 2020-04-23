import React, { Component } from 'react'

import { P } from '../components/styledComponents/P'
import { Container } from '../components/styledComponents/Container'
import { Title } from '../components/styledComponents/Title'
import { Header } from '../components/styledComponents/Header'
import { DynamicBox } from '../components/styledComponents/DynamicBox'

import Hero from '../assets/hero.svg'
import { Img } from '../components/styledComponents/ Img'
import { LinkAnchor } from '../components/styledComponents/Anchors'

export class Home extends Component {
  render () {
    return (
      <Container
        initial={{ translateX: -5, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 5, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header>
          <DynamicBox
            flexdirection='column'
            justifycontent='flex-start'
            alignitems='flex-start'
          >
            <Title bigtitle='true'>
              CodeBit,
              <br />
              Code everywhere
            </Title>
            <P specialheader='true'>
              Here you can organize and create your snnipets, add notes to your
              GitHub repo and share it on the CodeBit community!
            </P>
            <LinkAnchor specialhero='true' to='/signup'>
              Get started
            </LinkAnchor>
          </DynamicBox>
          <DynamicBox flexdirection='column' justifycontent='center'>
            <Img src={Hero} alt='Hero image' />
          </DynamicBox>
        </Header>
      </Container>
    )
  }
}
