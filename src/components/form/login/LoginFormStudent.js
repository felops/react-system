import React, { Component } from 'react'
import Form from './../Form'

const input = [
  {
    type: 'hidden',
    name: 'userType',
    id: 'userType',
    value: 'student'
  },
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nome Completo',
    required: true
  },
  {
    type: 'number',
    name: 'id',
    id: 'id',
    label: 'Matrícula',
    required: true
  },
  {
    type: 'selectResource',
    name: 'class',
    id: 'class',
    label: 'Classe',
    required: true
  }
]

export default class ExamFormStudent extends Component {
  render() {
    return (
      <div>
        <Form inputs={input} button={this.props.button}/>
      </div>
    )
  }
}
