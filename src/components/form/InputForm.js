import React, { Component } from 'react'
import { FormGroup, Label } from 'reactstrap'
import DateTimeRange from './elements/DateTimeRange'
import Input from './elements/Input'
import Radio from './elements/Radio'
import Select from './elements/Select'

export default class InputGroup extends Component {
  render() {
    let label, element
    const props = this.props

    if(props.label) {
      let requiredIndicator = props.required ? '*' : ''
      label = <Label for={props.id}>{props.label} <strong>{requiredIndicator}</strong></Label>
    }

    switch(props.type) {
      case 'select':
        element = <Select {...props}/>
      case 'radio':
        element = <Radio {...props} />
      case 'rangedatetime':
        element = <DateTimeRange onChange={props.onChange}/>
      default:
        element = <Input {...props}/>
    }

    return (
      <FormGroup>
        {label}
        {element}
      </FormGroup>
    )
  }
}
