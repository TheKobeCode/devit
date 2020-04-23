import React, { Component } from 'react'

// import history from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/auth'

import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../components/styledComponents/Container'
import { FormSign } from '../components/FormSign/FormSign'

export class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      email: '',
      password: '',
      error: false,
      errorreset: false,
      message: '',
      openReset: false,
      resetemail: '',
      success: false
    }
  }

  onChange = e => {
    this.setState({
      error: false,
      errorreset: false,
      [e.target.name]: e.target.value
    })
  }

  onChangeReset = e => {
    this.setState({
      error: false,
      errorreset: false,
      resetemail: e.target.value
    })
  }

  handleOpenReset = e => {
    e.preventDefault()
    this.setState({
      errorreset: false,
      error: false,
      openReset: !this.state.openReset
    })
  }

  render () {
    return (
      <AuthContext.Consumer>
        {authContext => {
          const { isAuth, toggleAuth, pushDashboard } = authContext

          const signUpUser = e => {
            e.preventDefault()
            const { email, password } = this.state
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                pushDashboard()
                toggleAuth()
              })
              .catch(error => {
                this.setState({
                  error: true,
                  message: error.message
                })
              })
          }

          const resetPassword = e => {
            e.preventDefault()
            this.setState({
              error: false
            })
            firebase
              .auth()
              .sendPasswordResetEmail(this.state.resetemail)
              .then(() => {
                this.setState({
                  success: true,
                  openReset: false,
                  errorreset: false,
                  message: 'Email sent, check your inbox!'
                })
              })
              .catch(error => {
                this.setState({
                  errorreset: true,
                  message: error.message
                })
              })
          }

          return (
            <Container
              initial={{ translateX: -5, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: 5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!isAuth ? (
                <React.Fragment>
                  <FormSign
                    titleForm='Sign In'
                    descriptionSign="Sign In with your email. If you don't have an account,"
                    whereRedirect='Sign Up.'
                    href='/signup'
                    onChange={this.onChange}
                    onSubmit={signUpUser}
                    error={this.state.error}
                    message={this.state.message}
                    signValue='Sign In'
                    signIn={true}
                    onReset={this.handleOpenReset}
                    openReset={this.state.openReset}
                    onChangeReset={this.onChangeReset}
                    onResetPassword={resetPassword}
                    errorreset={this.state.errorreset}
                    success={this.state.success}
                  />
                </React.Fragment>
              ) : (
                <div>With user, not SignIn</div>
              )}
            </Container>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}
