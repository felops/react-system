import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class InputGroup extends Component {
  render() {
    let label;
    if(this.props.label) {
      label = <Label for={this.props.id}>{this.props.label}</Label>;
    }

    if(this.props.type === 'select') {
      const options = this.props.options.map((option, i) =>
        <option key={option.id} value={option.id}>{option.name}</option>
      );

      return (
        <FormGroup>
          {label}
          <Input type='select' name={this.props.name} id={this.props.id} onChange={this.props.onChange}>
            {options}
          </Input>
        </FormGroup>
      );
    } else if(this.props.type === 'radio') {
      return (
        <FormGroup check>
          <Label check>
            <Input type="radio" name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
            {' ' + this.props.description}
          </Label>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup>
          {label}
          <Input type={this.props.type} name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
        </FormGroup>
      );
    }
  }
}
