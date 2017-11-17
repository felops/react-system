import React, { Component } from 'react'
import Form from './../Form'

const inputs = [
  {
    type: 'hidden',
    name: 'professor',
    id: 'professor',
    value: 1
  },
  {
    type: 'text',
    name: 'title',
    id: 'title',
    label: 'Título',
    required: true
  },
  {
    type: 'select',
    name: 'discipline',
    id: 'discipline',
    label: 'Disciplina',
    options: [
      {id:1, name:'Matemática'},
      {id:2, name:'Português'},
      {id:3, name:'História'},
    ],
    required: true
  },
  {
    type: 'select',
    name: 'class',
    id: 'class',
    label: 'Classe',
    options: [
      {id:1, name:'1A'},
      {id:2, name:'1B'},
      {id:3, name:'2A'},
      {id:4, name:'2B'}
    ],
    required: true
  },
  {
    type: 'number',
    name: 'sections',
    id: 'sections',
    label: 'Total de Seções',
    required: true
  },
  {
    type: 'dateTimeRange',
    name: 'range',
    id: 'range',
    label: 'Período',
    required: true
  }
]

export default class FirstExamForm extends Component {
  render() {
    return <Form inputs={inputs} button={this.props.button}/>
  }
}
