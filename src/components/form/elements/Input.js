import React, { Component } from 'react'
import { Input as InputText } from 'reactstrap'

export default class Input extends Component {
  render() {
    const props = this.props

    return (
      <InputText type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} required={props.required}/>
    )
  }
}
