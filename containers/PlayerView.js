import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActorTextInput from '../components/ActorTextInput'
import ActorList from '../components/ActorList'
import SyncStatus from '../components/SyncStatus'
import * as ActorActions from '../actions/actors'
import * as ActorTypes from '../constants/ActorTypes'

class PlayerView extends Component {
  render() {
    const { actors, actions, syncState } = this.props
    return (
      <div>
        <ActorTextInput newActor
           onSave={actions.addActor.bind(this, ActorTypes.PLAYER)}
           placeholder={"add yourself" } />
        <ActorList actors={actors.filter(actor => actor.actorType === ActorTypes.PLAYER)} actions={actions} />
        <SyncStatus status={syncState} />
      </div>
    )
  }
}

PlayerView.propTypes = {
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
)(PlayerView)

