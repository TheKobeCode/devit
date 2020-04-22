import React, { Component, createContext } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

export const AuthContext = createContext()

export class AuthContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuth: null,
      loading: false
    }
  }

  // function to set Auth state of the entire application
  getAuth = () => {
    this.setState({
      isAuth: false,
      loading: true
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loading: false,
          isAuth: true
        })
      } else {
        this.setState({
          loading: false,
          isAuth: false
        })
      }
    })
  }

  // this function can be used on the consumer
  // toggle the state of isAuth
  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth
    })
  }

  componentDidMount = () => {
    this.getAuth()
  }

  render () {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
