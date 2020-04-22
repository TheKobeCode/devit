import React, { Component } from 'react'

import history from './utils/history'
import { Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// importing pages
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Dashboard'
import { Devits } from './pages/Devits'

export class App extends Component {
  render () {
    return (
      <Router history={history}>
        <AnimatePresence exitBeforeEnter>
          <Route
            render={({ location }) => (
              <Switch key={location} location={location.pathname}>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/devits' component={Devits} />
              </Switch>
            )}
          />
        </AnimatePresence>
      </Router>
    )
  }
}
