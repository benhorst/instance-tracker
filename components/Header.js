import React, { PropTypes, Component } from 'react'
import ActorTextInput from './ActorTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.add(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>{this.props.label} Input</h1>
          <ActorTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="type name here" />
      </header>
    )
  }
}

Header.propTypes = {
  add: PropTypes.func.isRequired
}

export default Header

