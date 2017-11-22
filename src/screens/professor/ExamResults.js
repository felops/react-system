import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class ExamResults extends Component {
  tablefy(data) {
    let questions = data.ExamQuestions.map((question, i) => {
      let timeAnswers = 0
      let totalAnswers = question.StudentAnswers.length
      let correctAnswers = 0
      question.StudentAnswers.map((answer) => {
        timeAnswers = moment(answer.dateEnd).diff(moment(answer.dateStart))
        if(answer.questionOption === question.Question.QuestionAnswer.option) {
          correctAnswers++
        }

        return answer
      })

      let average = timeAnswers > 0 ? moment(timeAnswers / totalAnswers).format('mm:ss') : '-'

      return (
        <tr key={i}>
          <td>{ question.Question.id }</td>
          <td>{ question.Question.disciplineField }</td>
          <td>{ question.Question.level }</td>
          <td>{ totalAnswers }</td>
          <td>{ correctAnswers }</td>
          <td>{ average }</td>
        </tr>
      )
    })

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Questão</th>
            <th>Categoria</th>
            <th>Dificuldade</th>
            <th>Qtd. Respostas</th>
            <th>Qtd. Acertos</th>
            <th>Tempo Médio</th>
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
    axios.get('/api/professor/' + 1 + '/exam/' + exam + '/resultados')
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
        <p>{ this.state.table }</p>
      </div>
    )
  }
}
