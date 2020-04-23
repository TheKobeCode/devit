import React, { Component, createContext } from 'react'

import history from '../utils/history'
import firebase from 'firebase/app'
import 'firebase/auth'

export const AuthContext = createContext()

export class AuthContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuth: null,
      loading: false,
      userVerfied: false
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

  pushDashboard = () => {
    history.push('/dashboard')
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
        value={{
          ...this.state,
          toggleAuth: this.toggleAuth,
          pushDashboard: this.pushDashboard
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
