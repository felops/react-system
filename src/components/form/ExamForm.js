import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

const inputs = [
  {
    type: 'hidden',
    name: 'professor',
    id: 'professor',
    value: 1
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
    ]
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
    ]
  },
  {
    type: 'select',
    name: 'field',
    id: 'field',
    label: 'Área',
    options: [
      {id:1, name:'Geometria'},
      {id:2, name:'Trigonometria'},
      {id:3, name:'Álgebra'},
    ]
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
    ]
  },
  {
    type: 'number',
    name: 'year',
    id: 'year',
    label: 'Ano'
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
    name: 'questions',
    id: 'questions',
    label: 'Número de Questões'
  }
];

export default class ExamForm extends Component {
  onClick(e, state) {
    let data = {};
    for(let item in state) {
      data[item] = state[item];
    }

    axios.post('http://localhost:3000/api/exam', data).then((response) =>
      console.log(response)
    );
  }

  render() {
    return (
      <div>
        <Form inputs={inputs} onClick={this.onClick}/>
      </div>
    );
  }
}
