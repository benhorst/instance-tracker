import * as Types from '../constants/ActionTypes'
import PouchMiddleware from 'pouch-redux-middleware'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import PouchDB from 'pouchdb'
import PouchSync from 'pouch-websocket-sync'

const syncEvents = ['change', 'paused', 'active', 'denied', 'complete', 'error'];
const clientEvents = ['connect', 'disconnect', 'reconnect'];

const initialState = {
  actors: [],
//  actorActions: [],
  syncState: {
    text: 'unknown'
  }
}

export default function configureStore() {
  const db = new PouchDB('instancetracker');

  const syncClient = PouchSync.createClient()

  const sync = syncClient.
    connect('ws://localhost:3001').
    on('error', function(err) {
      console.log(err);
    }).
    sync(db, {
      remoteName: 'instancetracker-server',
    })

  syncEvents.forEach(function(event) {
    sync.on(event, function() {
      store.dispatch({type: Types.SET_SYNC_STATE, text: event});
    })
  })

  clientEvents.forEach(function(event) {
    syncClient.on(event, function() {
      store.dispatch({type: Types.SET_SYNC_STATE, text: event});
    })
  })

  const pouchMiddleware = PouchMiddleware({
    path: '/actors',
    db,
    actions: {
      remove: doc => store.dispatch({type: Types.DELETE_ACTOR, id: doc._id}),
      insert: doc => store.dispatch({type: Types.INSERT_ACTOR, actor: doc}),
      update: doc => store.dispatch({type: Types.UPDATE_ACTOR, actor: doc}),
    }
  })
  const createStoreWithMiddleware = applyMiddleware(pouchMiddleware)(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
