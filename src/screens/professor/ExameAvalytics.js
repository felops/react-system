import React, { Component } from 'react';
import Exam from './../../components/Exam';

export default class CreateExam extends Component {
  render() {
    return (
      <div>
        <h3>Estatístcas</h3>
        <p>Dos 42 alunos, 38 atngiram notas maiores que 6,00.</p>
        <p>A maior dificuldade encontrada foi em Trigonometria.</p>
        <Exam/>
      </div>
    );
  }
}
