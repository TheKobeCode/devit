import React, { Component } from 'react'

import history from './utils/history'
import { Router, Switch, Route } from 'react-router-dom'

export class App extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route />
        </Switch>
      </Router>
    )
  }
}
