import React, { Component } from 'react'
import CreateForm from './../../../components/form/CreateForm'

const inputs = [
  {
    type: 'selectResource',
    name: 'discipline',
    id: 'discipline',
    label: 'Disciplina',
    required: true
  },
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nome',
    required: true
  }
]

export default class DisciplineFieldExam extends Component {
  render() {
    return <CreateForm inputs={inputs} resource="disciplineField" title="Categoria"/>
  }
}
