import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import firebase from 'firebase/app'
import 'firebase/analytics'

require('dotenv').config()

// firebase config
var firebaseConfig = {
  apiKey: 'AIzaSyBdkuV_fPw4G-VU3-4vDicvI7Dre67ekzo',
  authDomain: 'devit-id.firebaseapp.com',
  databaseURL: 'https://devit-id.firebaseio.com',
  projectId: 'devit-id',
  storageBucket: 'devit-id.appspot.com',
  messagingSenderId: '301573806125',
  appId: '1:301573806125:web:0be7e4b2c8a2f5f7f840a4',
  measurementId: 'G-FKL6DZWLSZ'
}

// intializing the app
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
