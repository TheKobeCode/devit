import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export class AuthContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuth: false
    }
  }

  render () {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
