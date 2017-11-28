import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReadTemplate from './../../../components/ReadTemplate'

export default class ClassRead extends Component {
  constructor(props) {
    super(props)
    this.state = { data: 'carregando..' }
  }

  delete(item) {
    axios.delete('/api/question/' + item).then((response) => {
      let message

      if(response.data.data) {
        this.fetchData()
        message = <Alert color="success">Excluído com sucesso!</Alert>
      } else {
        message = <Alert color="danger">Erro ao excluir. Verifique se a questão está vinculada à um exame.</Alert>
      }

      this.setState({
        msg: message
      })
    })
  }

  tablefy(data) {
    if(data.length === 0) {
      return <p>Não existe nenhuma questão disponível.</p>
    }

    let rows = data.map((item, i) => {
      return (
        <tr key={i}>
          <td>{ item.id }</td>
          <td>{ item.question }</td>
          <td>{ item.DisciplineField.name }</td>
          <td>{ item.year }</td>
          <td>{ item.level }</td>
          <td>{ item.source }</td>
          <td><Link to={'/api/question/' + item.id}>Alterar</Link></td>
          <td><a href="#" onClick={() => this.delete(item.id)}>Excluir</a></td>
        </tr>
      )
    })

    return (
      <table className='table table-sm'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Questão</th>
            <th>Categoria</th>
            <th>Ano</th>
            <th>Dificuldade</th>
            <th>Fonte</th>
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
    axios.get('/api/question').then((response) => {
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
      <ReadTemplate data={this.state.data} title="Questão">
        { this.state.msg }
        { this.state.data }
      </ReadTemplate>
    )
  }
}
