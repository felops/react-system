import React, { Component } from 'react';
import Exam from './../../components/Exam';

export default class DoExam extends Component {
  render() {
    return (
      <div>
        <h3>Avaliação</h3>
        <Exam exam={this.props.match.params.id}/>
      </div>
    );
  }
}
