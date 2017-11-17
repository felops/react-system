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
    type: 'selectResource',
    name: 'discipline',
    id: 'discipline',
    label: 'Disciplina',
    required: true
  },
  {
    type: 'selectResource',
    name: 'class',
    id: 'class',
    label: 'Classe',
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
