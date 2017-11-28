import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReadTemplate from './../../../components/ReadTemplate'

export default class DisciplineRead extends Component {
  constructor(props) {
    super(props)
    this.state = { data: 'carregando..' }
  }

  delete(item) {
    axios.delete('/api/discipline/' + item).then((response) => {
      let message

      if(response.data.data) {
        this.fetchData()
        message = <Alert color="success">Excluído com sucesso!</Alert>
      } else {
        message = <Alert color="danger">Erro ao excluir, pois a disciplina está vinculada à uma categoria.</Alert>
      }

      this.setState({
        msg: message
      })
    })
  }

  tablefy(data) {
    if(data.length === 0) {
      return <p>Não existe nenhuma disciplina disponível.</p>
    }

    let rows = data.map((item, i) => {
      return (
        <tr key={i}>
          <td>{ item.id }</td>
          <td>{ item.name }</td>
          <td><Link to={'/api/discipline/' + item.id}>Alterar</Link></td>
          <td><a href="#" onClick={() => this.delete(item.id)}>Excluir</a></td>
        </tr>
      )
    })

    return (
      <table className='table table-sm'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Classe</th>
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
    axios.get('/api/discipline').then((response) => {
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
      <ReadTemplate data={this.state.data} title="Disciplina">
        { this.state.msg }
        { this.state.data }
      </ReadTemplate>
    )
  }
}
