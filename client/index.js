import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'
import {ParallaxProvider} from 'react-scroll-parallax'

// establishes socket connection
import './socket'

ReactDOM.render(
  <ParallaxProvider>
    <Router history={history}>
      <App />
    </Router>
  </ParallaxProvider>,
  document.getElementById('app')
)
