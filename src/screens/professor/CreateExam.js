import React, { Component } from 'react';
import ExamForm from './../../components/form/ExamForm';
import { Button } from 'reactstrap';

export default class CreateExam extends Component {
  render() {
    return (
      <div>
        <h3>Criar Avaliação</h3>
        <p>Não há avaliações em andamento no momento.</p>
        <ExamForm/>
        <Button color="primary">Criar</Button>
      </div>
    );
  }
}
