import React, { Component } from 'react'
import CreateForm from './../../../components/form/CreateForm'

const inputs = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nome',
    required: true
  },
  {
    type: 'email',
    name: 'email',
    id: 'email',
    label: 'Email',
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

export default class ProfessorCreate extends Component {
  render() {
    return <CreateForm inputs={inputs} resource="professor" title="Professor"/>
  }
}
