import React, { Component } from 'react';
import Exam from './../../components/Exam';
import { Button } from 'reactstrap';

export default class DoExam extends Component {
  render() {
    return (
      <div>
        <h3>Avaliação</h3>
        <Exam exam={this.props.match.params.id}/>
        <Button color="primary" className="helper-margin-top float-right">Enviar</Button>
      </div>
    );
  }
}
