import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import firebase from 'firebase/app'
import 'firebase/analytics'
import { firebaseConfig } from './utils/firebaseConfig'

// intializing the app
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
