import React, { Component } from 'react'
import axios from 'axios'

export default class ExamPerformance extends Component {
  tablefy(data) {
    if(data.ExamQuestions.length === 0) {
      return <p>Essa avaliação não tem nenhuma questão respondida.</p>
    }

    let questions = data.ExamQuestions.map((question, i) => {
      let rightAnswer = { text: 'Não', className: 'text-danger' }

      if(question.StudentAnswers[0].questionOption === question.Question.QuestionAnswer.option) {
        rightAnswer = { text: 'Sim', className: 'text-success' }
      }

      return (
        <tr key={i}>
          <td>{ question.id }</td>
          <td className={ rightAnswer.className }>{ rightAnswer.text }</td>
        </tr>
      )
    })

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Questão</th>
            <th>Acertou?</th>
          </tr>
        </thead>
        <tbody>
          { questions }
        </tbody>
      </table>
    )
  }

  componentWillMount() {
    this.setState({ table: 'carregando..' })
    let exam = this.props.match.params.id
    axios.get('/api/student/' + localStorage.getItem('USER_ARANDU') + '/exam/' + exam + '/resultados')
    .then((response) => {
      this.setState({
        table: this.tablefy(response.data[0])
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Resultados</h3>
        <div>{ this.state.table }</div>
      </div>
    )
  }
}
