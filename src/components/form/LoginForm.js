import React, { Component } from 'react';
import Form from './Form';

const inputs = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    label: 'E-mail'
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Senha'
  }
];

export default class ExamForm extends Component {
  render() {
    return (
      <div>
        <Form inputs={inputs}/>
      </div>
    );
  }
}
