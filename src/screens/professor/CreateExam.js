import React, { Component } from 'react'
import ExamForm from './../../components/form/exam/ExamForm'

export default class CreateExam extends Component {
  render() {
    return (
      <div>
        <h3>Criar Avaliação</h3>
        <ExamForm/>
      </div>
    )
  }
}
