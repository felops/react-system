import React, { Component } from 'react';
import InputForm from './InputForm';

export default class Form extends Component {
  componentDidMount() {
    let state = {};
    console.log(this.props.inputs);
    this.props.inputs.map(function(input) {
      state[input.name] = '';
    });

    this.setState(state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const inputForms = this.props.inputs.map((input, i) =>
      <InputForm {...input} key={i} onChange={this.props.handleChange}/>
    );

    return (
      <div>
        {inputForms}
      </div>
    );
  }
}
