import React, { Component } from 'react'
import CreateForm from './../../../components/form/CreateForm'

const inputs = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nome',
    required: true
  }
]

export default class DisciplineExam extends Component {
  render() {
    return <CreateForm inputs={inputs} resource="discipline" title="Disciplina"/>
  }
}
