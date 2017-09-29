import React, { Component } from 'react';
import InputForm from './../../components/InputForm';
import { Button } from 'reactstrap';

const inputs = [
  {
    type: 'select',
    name: 'disciplina',
    id: 'disciplina',
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
    name: 'font',
    id: 'font',
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
    label: 'Número de Questões',
    options: [
      {id:1, name:'ENEM'},
      {id:2, name:'ETEC'},
      {id:3, name:'FATEC'},
    ]
  }
];

export default class CreateExam extends Component {
  componentDidMount() {
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const inputForm = inputs.map((input, i) =>
      <InputForm {...input} key={i} onChange={this.handleChange.bind(this)}/>
    );

    return (
      <div>
        <h3>Criar Avaliação</h3>
        <p>Não há avaliações em andamento no momento.</p>
        <div className="splitted-in-2">
          {inputForm}
        </div>
        <Button color="primary">Criar</Button>
      </div>
    );
  }
}
