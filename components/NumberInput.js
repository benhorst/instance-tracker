import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'


class NumberInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { editing: false, value: this.props.binding || 0 }
  }

  change(ev) {
    this.setState(Object.assign({}, this.state, {value: parseInt(ev.target.value)}))
  }

  blur(ev) {
    this.setState(Object.assign({}, this.state, {editing: false}))
    this.props.onChange(this.state.value)
  }

  click(ev) {
    this.setState(Object.assign({}, this.state, {editing: true}))
  }

  componentDidUpdate(pProps, pState) {
    if (this.state.editing) {
      ReactDOM.findDOMNode(this.refs.numberInput).focus(); 
      if (!pState.editing) {
        ReactDOM.findDOMNode(this.refs.numberInput).select(); 
      }
    }
  }

  render() {
    const { binding, onChange } = this.props

    return (
              this.state.editing ?
                <input type="number"
                       ref="numberInput"
                       value={this.state.value}
                       onChange={this.change.bind(this)}
                       onBlur={this.blur.bind(this)} />
                :
                <span onClick={this.click.bind(this)}>
                  {this.state.value}
                </span>
           )
  }
}


NumberInput.propTypes = {
  binding: PropTypes.number.isRequired,
  onChange: PropTypes.func
}

export default NumberInput
