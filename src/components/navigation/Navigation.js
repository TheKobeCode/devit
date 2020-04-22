import React, { Component } from 'react'
import { LogoStyled } from '../styledComponents/LogoStyled'

export class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <LogoStyled />
      </div>
    )
  }
}
