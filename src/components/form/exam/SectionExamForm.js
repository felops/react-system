import React, { Component } from 'react'
import Form from './../Form'

const inputs = [
  {
    type: 'number',
    name: 'questions',
    id: 'questions',
    label: 'Número de Questões da Seção',
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
      {id:1, name:'1'},
      {id:2, name:'2'},
      {id:3, name:'3'},
    ]
  },
  {
    type: 'select',
    name: 'source',
    id: 'source',
    label: 'Fonte',
    options: [
      {id:1, name:'ENEM'},
      {id:2, name:'ETEC'},
      {id:3, name:'FATEC'},
    ]
  },
  {
    type: 'number',
    name: 'year',
    id: 'year',
    label: 'Ano das Questões'
  }
]

export default class FirstExamForm extends Component {
  render() {
    return <Form inputs={inputs} button={this.props.button}/>
  }
}
