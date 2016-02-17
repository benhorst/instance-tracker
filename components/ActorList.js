import React, { Component, PropTypes } from 'react'
import ActorListItem from './ActorListItem'
import classNames from 'classnames'

import '../style/components/main.scss'

class ActorList extends Component {
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
          {actors.sort( (a,b) => b.initiative - a.initiative).map((actor) => {
              return <ActorListItem actor={actor}
                                    actions={actions} />
            }
          )}
        </ul>
      </section>
    )
  }
}

ActorList.propTypes = {
  actors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ActorList
