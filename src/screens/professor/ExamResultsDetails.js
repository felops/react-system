import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class ExamResultsdetails extends Component {
  tablefy(data) {
    let question = data.ExamQuestions[0]
    let totalAnswers = question.StudentAnswers.length
    let totalRightAnswer = 0

    if(totalAnswers === 0) {
      return <p>Essa avaliação não tem nenhuma questão cadastrada.</p>
    }

    let questions = question.StudentAnswers.map((answer, i) => {
      let rightAnswer = { text: 'Não', className: 'text-danger' }
      let timeAnswers = moment(answer.dateEnd).diff(moment(answer.dateStart))
      let questioAnswer = answer.questionOption ? answer.questionOption : '-'

      if(answer.questionOption === question.Question.QuestionAnswer.option) {
        rightAnswer = { text: 'Sim', className: 'text-success' }
        totalRightAnswer++
      }

      return (
        <tr key={i}>
          <td>{ answer.student }</td>
          <td>{ questioAnswer }</td>
          <td>{ moment(timeAnswers).format('mm:ss') }</td>
          <td className={ rightAnswer.className }>{ rightAnswer.text }</td>
        </tr>
      )
    })

    return (
      <div>
        <p>Questão { question.Question.id }</p>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Resposta</th>
              <th>Tempo</th>
              <th>Acerto</th>
            </tr>
          </thead>
          <tbody>
            { questions }
          </tbody>
        </table>
        <p>Total de { totalRightAnswer } acerto(s) de { totalAnswers } resposta(s) ({totalRightAnswer / totalAnswers * 100 } %).</p>
      </div>
    )
  }

  componentWillMount() {
    this.setState({ table: 'carregando..' })
    let params = this.props.match.params
    axios.get('/api/professor/' + 1 + '/exam/' + params.avaliacao + '/question/' + params.questao)
    .then((response) => {
      this.setState({
        table: this.tablefy(response.data[0])
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Detalhes</h3>
        <p>{ this.state.table }</p>
      </div>
    )
  }
}
