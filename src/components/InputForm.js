import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class InputGroup extends Component {
  render() {
    return (
      <FormGroup>
        <Label for={this.props.id}>{this.props.label}</Label>
        <Input type={this.props.type} name={this.props.name} id={this.props.id} onChange={this.props.onChange}/>
      </FormGroup>
    );
  }
}
