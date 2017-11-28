import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap'
import ReadTemplate from './../../../components/ReadTemplate'
import ModalUpdate from './../../../components/form/ModalUpdate'

export default class ClassRead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'carregando..',
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  delete(item) {
    axios.delete('/api/class/' + item).then((response) => {
      let message

      if(response.data.data) {
        this.fetchData()
        message = <Alert color="success">Excluído com sucesso!</Alert>
      } else {
        message = <Alert color="danger">Erro ao excluir, pois existem alunos vinculados à classe.</Alert>
      }

      this.setState({
        msg: message
      })
    })
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  edit(item) {
    let inputs = [
      {
        type: 'hidden',
        name: 'id',
        id: 'id',
        defaultValue: item.id
      },
      {
        type: 'text',
        name: 'name',
        id: 'name',
        label: 'Classe',
        required: true,
        defaultValue: item.name
      }
    ]

    this.setState({
      showModal: true,
      inputs: inputs
    })
  }

  tablefy(data) {
    if(data.length === 0) {
      return <p>Não existe nenhuma classe disponível.</p>
    }

    let rows = data.map((item, i) => {
      return (
        <tr key={i}>
          <td>{ item.id }</td>
          <td>{ item.name }</td>
          <td><a href="#" onClick={() => this.edit(item)}>Alterar</a></td>
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
    axios.get('/api/class').then((response) => {
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
      <ReadTemplate data={this.state.data} title="Classe">
        { this.state.msg }
        { this.state.data }
        <ModalUpdate inputs={this.state.inputs} showModal={this.state.showModal} toggleModal={this.toggleModal} resource="class" title="Classe" fetchData={this.fetchData.bind(this)}/>
      </ReadTemplate>
    )
  }
}
