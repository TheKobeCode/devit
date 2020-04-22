import React, { Component } from 'react'

// import history from '../contexts/AuthContext'
import firebase from 'firebase/app'
import 'firebase/auth'

import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../components/styledComponents/Container'

export class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      email: '',
      password: ''
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
          }

          return (
            <Container>
              {!isAuth ? (
                <React.Fragment>
                  <div>No user, can SignUp</div>
                  <form onSubmit={signUpUser}>
                    <input
                      name='email'
                      type='email'
                      placeholder='email'
                      onChange={this.onChange}
                    />
                    <input
                      onChange={this.onChange}
                      name='password'
                      type='password'
                      placeholder='password'
                    />
                    <input
                      type='submit'
                      value='Sign Up'
                      onSubmit={signUpUser}
                    />
                  </form>
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
