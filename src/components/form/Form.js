import React, { Component } from 'react'
import InputForm from './InputForm'
import { Button } from 'reactstrap'
import validator from 'validator'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonDisabled: this.props.handleChange ? false : true
    }
  }

  componentDidMount() {
    let state = {}

    if(this.props.inputs) {
      this.props.inputs.map(function(input) {
        return state[input.name] = input.value
      })
    }

    this.setState(state)
    this.handleChange = this.props.handleChange ? this.props.handleChange : this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  validate(input) {
    let isValid = true,
        value = this.state[input.name]

    if(input.required) {
      if(!value) {
        isValid = false
      } else if(validator.isEmpty(value)) {
        isValid = false
      } else if(input.type === 'select' && parseInt(value, 10) === 0) {
        isValid = false
      } else if(input.type === 'email' && !validator.isEmail(value)) {
        isValid = false
      }
    }

    return isValid
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.setState({ buttonDisabled: this.props.inputs.map(input => this.validate(input)).includes(false) })
    )
  }

  onClick(e) {
    this.props.button.onClick(e, this.state)
  }

  render() {
    let button
    let inputForms

    if(this.props.inputs) {
      inputForms = this.props.inputs.map((input, i) =>
        <InputForm {...input} key={'a' + i} onChange={this.handleChange}/>
      )
    }

    if(this.props.button) {
      button = <Button color="primary" onClick={this.onClick} className="cursor-pointer" disabled={this.state.buttonDisabled}>{this.props.button.text}</Button>
    }

    return (
      <div>
        {inputForms}
        {button}
      </div>
    )
  }
}
