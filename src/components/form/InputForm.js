import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class InputGroup extends Component {
  render() {
    let label;
    const props = this.props;

    if(props.label) {
      label = <Label for={props.id}>{props.label}</Label>;
    }

    switch(props.type) {
      case 'select':
        const options = props.options.map((option, i) =>
          <option key={option.id} value={option.id}>{option.name}</option>
        );

        return (
          <FormGroup>
            {label}
            <Input type='select' name={props.name} id={props.id} onChange={props.onChange} required={props.required}>
              {options}
            </Input>
          </FormGroup>
        );

        break;
      case 'radio':
        return (
          <FormGroup check>
            <Label check>
              <Input type="radio" name={props.name} value={props.value} onChange={props.onChange} required={props.required}/>
              {' ' + props.description}
            </Label>
          </FormGroup>
        );
        
        break;
      default:
        return (
          <FormGroup>
            {label}
            <Input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} required={props.required}/>
          </FormGroup>
        );
    }
  }
}
