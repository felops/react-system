import React, { Component } from 'react'
import Form from './../Form'

let inputs = [
  {
    type: 'number',
    name: 'questions',
    id: 'questions',
    label: 'Número de Questões da Seção',
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

export default class SectionExamForm extends Component {
  componentWillMount() {
    let discipline = this.props.discipline

    if(discipline) {
      inputs[1] = {
        ...inputs[1],
        discipline: discipline
      }
    }
  }

  render() {
    return <Form inputs={inputs} button={this.props.button}/>
  }
}
