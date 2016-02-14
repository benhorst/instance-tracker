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

  handleHpChange(newValue) {
    this.props.actions.updateActor(Object.assign({}, this.props.actor, { hp: newValue }))
  }

  render() {
    const { actor, actions } = this.props

    return (
            <li key={actor._id}
                className={classNames('actor', actor.actorType)}>
              <button onClick={this.handleDelete.bind(this, actor._id)}>
                remove
              </button>
              <span className="init">
                <NumberInput binding={actor.initiative} onChange={this.handleInitiativeChange.bind(this)} />
              </span>
              <span className="name">
                {actor.name}
              </span>
              <span className="hp">
                (
                <NumberInput binding={actor.hp} onChange={this.handleHpChange.bind(this)} />
                )
              </span>
            </li> 
          )
  }
}


ActorListItem.propTypes = {
  actor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ActorListItem
