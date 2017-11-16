import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class ExamsTable extends Component {
  createTableRow(exams) {
    moment.locale('pt-br')

    return exams.map((exam, i) => {
      let date = [moment(exam.dateStart), moment(exam.dateEnd)]
      let start = date[0].isAfter(moment()) ?
                    date[0].from(moment()) :
                    moment(date[1]).format('DD/MM/YYYY')
      return (
        <tr key={i}>
          <td>{ exam.title }</td>
          <td>{ start }</td>
          <td>{ date[1].from(date[0], true) }</td>
        </tr>
      )}
    )
  }

  componentWillMount() {
    this.setState({exams: 'carregando..'})

    axios.get('/api/class/' + this.props.studentClass + '/exam').then((response) => {
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
            <th>Prazo</th>
          </tr>
        </thead>
        <tbody>
          { this.state.exams }
        </tbody>
      </table>
    )
  }
}
