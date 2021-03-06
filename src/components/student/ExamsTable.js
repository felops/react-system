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
                    moment(date[1]).format('DD/MM/YYYY')
      return (
        <tr key={i}>
          <td>{ exam.title }</td>
          <td>{ start }</td>
          <td>{ date[1].from(date[0], true) }</td>
          <td><Link to={'/avaliacao/' + exam.id + '/resultado'}>Visualizar</Link></td>
        </tr>
      )}
    )
  }

  componentWillMount() {
    this.setState({
      exams: 'carregando..',
      results: 0,
    })

    axios.get('/api/class/' + this.props.studentClass + '/exam').then((response) => {
      this.setState({
        results: response.data.length,
        exams: this.createTableRow(response.data)
      })
    })
  }

  render() {
    if(this.state.results > 0) {
      return (
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Título</th>
              <th>Início</th>
              <th>Prazo</th>
              <th>Resultados</th>
            </tr>
          </thead>
          <tbody>
            { this.state.exams }
          </tbody>
        </table>
      )
    } else {
      return <p>Não existe nenhum exame disponível.</p>
    }
  }
}
