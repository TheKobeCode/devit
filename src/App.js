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
import { AuthContextProvider } from './contexts/AuthContext'

export class App extends Component {
  render () {
    return (
      <AuthContextProvider>
        <Router history={history}>
          <AnimatePresence exitBeforeEnter>
            <Route
              render={({ location }) => (
                <Switch key={location.pathname} location={location}>
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
      </AuthContextProvider>
    )
  }
}
