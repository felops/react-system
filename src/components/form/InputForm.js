import React, { Component } from 'react'
import { FormGroup, Label } from 'reactstrap'
import DateTimeRange from './elements/DateTimeRange'
import Input from './elements/Input'
import Radio from './elements/Radio'
import Select from './elements/Select'
import SelectResource from './elements/SelectResource'
import SelectDisciplineField from './elements/SelectDisciplineField'

export default class InputGroup extends Component {
  render() {
    let label, element
    const props = this.props

    if(props.label) {
      let requiredIndicator = props.required ? '*' : ''
      label = <Label for={props.id}>{props.label} <strong>{requiredIndicator}</strong></Label>
    }

    switch(props.type) {
      case 'selectResource':
        element = <SelectResource {...props}/>
        break
      case 'selectDisciplineField':
        element = <SelectDisciplineField {...props}/>
        break
      case 'select':
        element = <Select {...props}/>
        break
      case 'radio':
        element = <Radio {...props} />
        break
      case 'dateTimeRange':
        element = <DateTimeRange onChange={props.onChange}/>
        break
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
