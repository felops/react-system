import React, { Component } from 'react'
import Form from './../Form'

const input = [
  {
    type: 'hidden',
    name: 'userType',
    id: 'userType',
    value: 'professor'
  },
  {
    type: 'email',
    name: 'email',
    id: 'email',
    label: 'E-mail',
    required: true
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Senha',
    required: true
  }
]

export default class ExamFormProfessor extends Component {
  render() {
    return (
      <div>
        <Form inputs={input} button={this.props.button}/>
      </div>
    )
  }
}
