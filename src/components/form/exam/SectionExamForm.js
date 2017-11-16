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
    type: 'select',
    name: 'disciplineField',
    id: 'disciplineField',
    label: 'Categoria',
    options: [
      {id:1, name:'Geometria'},
      {id:2, name:'Trigonometria'},
      {id:3, name:'Álgebra'},
    ],
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
