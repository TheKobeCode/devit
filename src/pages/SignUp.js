import React, { Component } from 'react'

// import history from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/auth'

import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../components/styledComponents/Container'
import { FormSign } from '../components/FormSign/FormSign'

export class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      email: '',
      password: '',
      error: false,
      message: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                pushDashboard()
                toggleAuth()
              })
              .catch(error => {
                this.setState({
                  error: error,
                  message: error.message
                })
              })
          }

          return (
            <Container
              initial={{ translateX: -5, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: 5, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {!isAuth ? (
                <React.Fragment>
                  <FormSign
                    titleForm='Sign Up'
                    descriptionSign='Create a new account, using your email, then verify your account. If you already have an account,'
                    whereRedirect='Sign In.'
                    href='/signin'
                    onChange={this.onChange}
                    onSubmit={signUpUser}
                    error={this.state.error}
                    message={this.state.message}
                  />
                </React.Fragment>
              ) : (
                <div>With user, not SignUp</div>
              )}
            </Container>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}
