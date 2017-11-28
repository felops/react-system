import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReadTemplate from './../../../components/ReadTemplate'

export default class ClassRead extends Component {
  constructor(props) {
    super(props)
    this.state = { data: 'carregando..' }
  }

  delete(item) {
    axios.delete('/api/exam/' + item).then((response) => {
      let message
      
      if(response.data.data) {
        this.fetchData()
        message = <Alert color="success">Excluído com sucesso!</Alert>
      } else {
        message = <Alert color="danger">Erro ao excluir.</Alert>
      }

      this.setState({
        msg: message
      })
    })
  }

  tablefy(data) {
    if(data.length === 0) {
      return <p>Não existe nenhum exame disponível.</p>
    }

    let rows = data.map((item, i) => {
      return (
        <tr key={i}>
          <td>{ item.id }</td>
          <td>{ item.title }</td>
          <td>{ moment(item.dateStart).format('DD/MM/YYYY HH:mm') }</td>
          <td>{ moment(item.dateEnd).format('DD/MM/YYYY HH:mm') }</td>
          <td>{ item.Class.name }</td>
          <td>{ item.Discipline.name }</td>
          <td>{ item.Professor.name }</td>
          <td><Link to={'/api/exam/' + item.id}>Alterar</Link></td>
          <td><a href="#" onClick={() => this.delete(item.id)}>Excluir</a></td>
        </tr>
      )
    })

    return (
      <table className='table table-sm'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Classe</th>
            <th>Discipline</th>
            <th>Professor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }

  fetchData() {
    axios.get('/api/exam').then((response) => {
      this.setState({
        data: this.tablefy(response.data)
      })
    })
  }

  componentWillMount() {
    this.fetchData()
  }

  render() {
    return (
      <ReadTemplate data={this.state.data} title="Avaliação">
        { this.state.msg }
        { this.state.data }
      </ReadTemplate>
    )
  }
}
