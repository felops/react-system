import React, { Component } from 'react';
import Form from './Form';

const inputs = [
  {
    type: 'select',
    name: 'type',
    id: 'type',
    label: 'Usuário',
    options: [
      {id: 1, name: 'Estudante'},
      {id: 2, name: 'Professor'}
    ]
  },
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
        <Form inputs={inputs} button={this.props.button}/>
      </div>
    );
  }
}
