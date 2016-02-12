import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import '../style/components/actors.scss'

class ActorListItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  handleDelete(id) {
    this.props.actions.removeActor(id);
  }

  handleShow() {
    this.setState({})
  }

  render() {
    const { actor, actions } = this.props

    return (
            <li key={actor._id}
                className={classNames('actor', actor.actorType)}>
              {actor.name}
              <button onClick={this.handleDelete.bind(this, actor._id)}>
                remove
              </button>
            </li> 
          )
  }
}


ActorListItem.propTypes = {
  actor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ActorListItem
