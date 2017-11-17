import React, { Component } from 'react'
import CreateForm from './../../../components/form/CreateForm'

const inputs = [
  {
    type: 'textarea',
    name: 'question',
    id: 'question',
    label: 'Questão',
    required: true
  },
  {
    type: 'selectResource',
    name: 'disciplineField',
    id: 'disciplineField',
    label: 'Categoria',
    required: true
  },
  {
    type: 'select',
    name: 'level',
    id: 'level',
    label: 'Dificuldade',
    options: [
      {id:1, name:'A'},
      {id:2, name:'B'},
      {id:3, name:'C'},
    ],
    required: true
  },
  {
    type: 'text',
    name: 'source',
    id: 'source',
    label: 'Fonte'
  },
  {
    type: 'number',
    name: 'year',
    id: 'year',
    label: 'Ano da Questão'
  }
]

export default class QuestionCreate extends Component {
  render() {
    return <CreateForm inputs={inputs} resource="question" title="Questão"/>
  }
}
