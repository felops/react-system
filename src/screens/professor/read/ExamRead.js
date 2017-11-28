import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Alert } from 'reactstrap'
import ReadTemplate from './../../../components/ReadTemplate'
import ModalUpdate from './../../../components/form/ModalUpdate'

export default class ExamRead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'carregando..',
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
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
        type: 'hidden',
        name: 'id',
        id: 'id',
        defaultValue: item.id
      },
      {
        type: 'text',
        name: 'title',
        id: 'title',
        label: 'Título',
        required: true,
        defaultValue: item.title
      },
      {
        type: 'selectResource',
        name: 'discipline',
        id: 'discipline',
        label: 'Disciplina',
        required: true,
        defaultValue: item.discipline
      },
      {
        type: 'selectResource',
        name: 'class',
        id: 'class',
        label: 'Classe',
        required: true,
        defaultValue: item.class
      }
    ]

    this.setState({
      showModal: true,
      inputs: inputs
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
        <ModalUpdate inputs={this.state.inputs} showModal={this.state.showModal} toggleModal={this.toggleModal} resource="exam" title="Avaliação" fetchData={this.fetchData.bind(this)}/>
      </ReadTemplate>
    )
  }
}
