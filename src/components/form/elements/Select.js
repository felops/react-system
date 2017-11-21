import React, { Component } from 'react'
import { Input } from 'reactstrap'

export default class Select extends Component {
  render() {
    const props = this.props
    const options = props.options.map((option, i) =>
      <option key={option.id} value={option.id}>{option.name}</option>
    )

    return (
      <Input type='select' name={props.name} id={props.id} onChange={props.onChange} required={props.required} defaultValue={props.defaultValue} value={props.value} disabled={props.disabled}>
        <option key="0" value="0">SELECIONE</option>
        {options}
      </Input>
    )
  }
}
