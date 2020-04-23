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
      <Title heading1='true'>{props.titleForm}</Title>
      <P formp='true'>
        {props.descriptionSign}{' '}
        <LinkAnchor to={props.href}>{props.whereRedirect}</LinkAnchor>
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
          value={props.signValue}
          onSubmit={props.onSubmit}
        />
        {props.error ? <P errormessage='true'>{props.message}</P> : null}
      </Form>
      {!props.signIn ? null : (
        <SignContainer normal='true'>
          <P resetpasswordbtn='true' onClick={props.onReset}>
            Forgot yout password?
          </P>
          {props.openReset ? (
            <Form onSubmit={props.onResetPassword}>
              <Input
                type='email'
                name='emailreset'
                placeholder='A valid email'
                onChange={props.onChangeReset}
              />
              <Input
                type='submit'
                inputsubmit='true'
                name='emailreset'
                value='Reset password'
                onSubmit={props.onResetPassword}
              />
              {props.errorreset ? (
                <P errormessage='true'>{props.message}</P>
              ) : null}
            </Form>
          ) : null}
          {props.success ? <P success='true'>{props.message}</P> : null}
        </SignContainer>
      )}
    </SignContainer>
  )
}
