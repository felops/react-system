import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class InputGroup extends Component {
  render() {
    if(this.props.type == 'select') {
      const options = this.props.options.map((option, i) =>
        <option key={option.id}>{option.name}</option>
      );

      return (
        <FormGroup>
          <Label for={this.props.id}>{this.props.label}</Label>
          <Input type='select' name={this.props.name} id={this.props.id} onChange={this.props.onChange}>
            {options}
          </Input>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup>
          <Label for={this.props.id}>{this.props.label}</Label>
          <Input type={this.props.type} name={this.props.name} id={this.props.id} onChange={this.props.onChange}/>
        </FormGroup>
      );
    }
  }
}
