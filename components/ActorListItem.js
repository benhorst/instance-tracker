import React, { Component, PropTypes } from 'react'
import NumberInput from './NumberInput'
import classNames from 'classnames'

import '../style/components/actors.scss'

class ActorListItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {  }
  }

  handleDelete(id) {
    this.props.actions.removeActor(id);
  }

  handleInitiativeChange(newValue) {
    this.props.actions.updateActor(Object.assign({}, this.props.actor, { initiative: newValue }))
  }

  render() {
    const { actor, actions } = this.props

    return (
            <li key={actor._id}
                className={classNames('actor', actor.actorType)}>
              <button onClick={this.handleDelete.bind(this, actor._id)}>
                remove
              </button>
              <NumberInput binding={actor.initiative} onChange={this.handleInitiativeChange.bind(this)} />
              {actor.name}
            </li> 
          )
  }
}


ActorListItem.propTypes = {
  actor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ActorListItem
