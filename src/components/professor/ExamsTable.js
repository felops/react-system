import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    moment(date[1]).format('DD/MM/YYYY hh:mm')
      return (
        <tr key={i}>
          <td><Link to={'/avaliacao/' + exam.id + '/detalhar'}>{ exam.title }</Link></td>
          <td>{ start }</td>
          <td>{ date[1].from(date[0], true) }</td>
          <td>{ exam.Class.name }</td>
          <td>{ exam.Discipline.name }</td>
        </tr>
      )}
    )
  }

  componentWillMount() {
    this.setState({exams: 'carregando..'})

    axios.get('/api/professor/' + this.props.professor + '/exam').then((response) => {
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
            <th>Título</th>
            <th>Início</th>
            <th>Prazo</th>
            <th>Classe</th>
            <th>Disciplina</th>
          </tr>
        </thead>
        <tbody>
          { this.state.exams }
        </tbody>
      </table>
    )
  }
}
