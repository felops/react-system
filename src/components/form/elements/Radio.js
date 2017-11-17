import React, { Component } from 'react'
import { Label, Input } from 'reactstrap'

export default class Radio extends Component {
  render() {
    const props = this.props

    return (
      <Label check>
        <Input type="radio" name={props.name} value={props.value} onChange={props.onChange} required={props.required}/>
        {' ' + props.description}
      </Label>
    )
  }
}
