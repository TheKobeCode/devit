import React from 'react'
import { Form } from '../styledComponents/Form'
import { SignContainer } from '../styledComponents/SignContainer'
import { Title } from '../styledComponents/Title'
import { P } from '../styledComponents/P'
import { Input } from '../styledComponents/Input'
import { LinkAnchor } from '../styledComponents/Anchors'

export const FormSign = props => {
  return (
    <SignContainer>
      <Title heading1='true'>Sign Up</Title>
      <P formp='true'>
        Create a new account using your email and password, if you already have an
        account <LinkAnchor to='/signin'>Sign In.</LinkAnchor>
      </P>
      <Form onSubmit={props.onSubmit}>
        <Input
          name='email'
          type='email'
          placeholder='email'
          onChange={props.onChange}
        />
        <Input
          inputlast='true'
          onChange={props.onChange}
          name='password'
          type='password'
          placeholder='password'
        />
        <Input
          inputsubmit='true'
          type='submit'
          value='Sign Up'
          onSubmit={props.onSubmit}
        />
      </Form>
    </SignContainer>
  )
}
