import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import PlayerView from './containers/PlayerView'
import configureStore from './store/configureStore'
import PouchDB from 'pouchdb'

const store = configureStore()

window.location.pathname.indexOf('player') < 0 ? 
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  :
  render(
    <Provider store={store}>
      <PlayerView />
    </Provider>,
    document.getElementById('root')
  )
