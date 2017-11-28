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
    type: 'textarea',
    name: 'option1',
    id: 'option1',
    label: 'Opção 1',
    required: true
  },
  {
    type: 'textarea',
    name: 'option2',
    id: 'option2',
    label: 'Opção 2',
    required: true
  },
  {
    type: 'textarea',
    name: 'option3',
    id: 'option3',
    label: 'Opção 3',
    required: true
  },
  {
    type: 'textarea',
    name: 'option4',
    id: 'option4',
    label: 'Opção 4',
    required: true
  },
  ,
  {
    type: 'select',
    name: 'rightOption',
    id: 'rightOption',
    label: 'Opção correta',
    options: [
      {id: 1, name: 'Opção 1'},
      {id: 2, name: 'Opção 2'},
      {id: 3, name: 'Opção 3'},
      {id: 4, name: 'Opção 4'},
    ],
    required: true
  },
  {
    type: 'selectDisciplineField',
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
      {id:1, name:'1'},
      {id:2, name:'2'},
      {id:3, name:'3'},
    ]
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
