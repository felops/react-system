import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class AvailableExamsTable extends Component {
  createTableRow(exams) {
    moment.locale('pt-br')
    let now = moment()

    return exams.map((exam, i) => {
      let date = [moment(exam.dateStart), moment(exam.dateEnd)]
      return (
        <tr key={i}>
          <td><Link to={'/avaliacao/' + exam.id}>{exam.title}</Link></td>
          <td>{ date[0].from(moment()) }</td>
          <td>{ date[1].format('DD/MM/YYYY HH:mm') } ({ date[1].from(moment(now)) })</td>
        </tr>
      )
    })
  }

  componentWillMount() {
    this.setState({exams: 'carregando..'})

    axios.get('/api/class/' + this.props.studentClass + '/exam/available').then((response) => {
      this.setState({
         exams: this.createTableRow(response.data)
      })
    })
  }

  render() {
    return (
      <table className='table table-sm'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Início</th>
            <th>Fim</th>
          </tr>
        </thead>
        <tbody>
          {this.state.exams}
        </tbody>
      </table>
    )
  }
}
