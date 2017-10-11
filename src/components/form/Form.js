import React, { Component } from 'react';
import InputForm from './InputForm';
import { Button } from 'reactstrap';

export default class Form extends Component {
  componentDidMount() {
    let state = {};

    if(this.props.inputs) {
      this.props.inputs.map(function(input) {
        return state[input.name] = input.value;
      });
    }

    this.setState(state);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onClick(e) {
    this.props.button.onClick(e, this.state);
  }

  render() {
    let button;
    let inputForms;

    if(this.props.inputs) {
      inputForms = this.props.inputs.map((input, i) =>
        <InputForm {...input} key={'a' + i} onChange={this.handleChange}/>
      );
    }

    if(this.props.button) {
      button = <Button color="primary" onClick={this.onClick}>{this.props.button.text}</Button>;
    }

    return (
      <div>
        {inputForms}
        {button}
      </div>
    );
  }
}
