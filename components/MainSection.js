import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import '../style/components/actors.scss'
import '../style/components/main.scss'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  handleShow() {
    this.setState({ })
  }

  render() {
    const { actors, actions } = this.props

    return (
      <section className="main">
        <ul className="list">
          {actors.map(actor =>
            <li key={actor.name}
                className={classNames('actor', actor.actorType)}>{actor.name}</li> 
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  actors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
