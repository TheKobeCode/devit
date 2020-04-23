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
            <Container
              initial={{ translateX: -5, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: 5, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {!isAuth ? (
                <React.Fragment>
                  <FormSign onChange={this.onChange} onSubmit={signUpUser} />
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
