import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActorTextInput from '../components/ActorTextInput'
import ActorList from '../components/ActorList'
import SyncStatus from '../components/SyncStatus'
import * as ActorActions from '../actions/actors'
import * as ActorTypes from '../constants/ActorTypes'

class App extends Component {
  render() {
    const { actors, actions, syncState } = this.props
    return (
      <div>
        {
          Object.keys(ActorTypes).map(function(key) {
            return <ActorTextInput newActor
                                   onSave={actions.addActor.bind(this, ActorTypes[key])}
                                   placeholder={"add a " + ActorTypes[key] } />
          })
        }
        <ActorList actors={actors} actions={actions} />
        <SyncStatus status={syncState} />
      </div>
    )
  }
}

App.propTypes = {
  actors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    actors: state.actors,
    syncState: state.syncState,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActorActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

