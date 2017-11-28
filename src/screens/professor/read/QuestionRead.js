import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap'
import ReadTemplate from './../../../components/ReadTemplate'
import ModalUpdate from './../../../components/form/ModalUpdate'

export default class QuestionRead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'carregando..',
      showModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
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
        type: 'textarea',
        name: 'question',
        id: 'question',
        label: 'Questão',
        required: true,
        defaultValue: item.question
      },
      {
        type: 'selectDisciplineField',
        name: 'disciplineField',
        id: 'disciplineField',
        label: 'Categoria',
        required: true,
        discipline: item.DisciplineField.Discipline.id,
        defaultValue: item.DisciplineField.id
      },
      {
        type: 'select',
        name: 'level',
        id: 'level',
        label: 'Dificuldade',
        options: [
          {id:1, name:'1'},
          {id:2, name:'2'},
          {id:3, name:'3'},
        ],
        defaultValue: item.level
      },
      {
        type: 'text',
        name: 'source',
        id: 'source',
        label: 'Fonte',
        defaultValue: item.source
      },
      {
        type: 'number',
        name: 'year',
        id: 'year',
        label: 'Ano da Questão',
        defaultValue: item.year
      }
    ]

    this.setState({
      showModal: true,
      inputs: inputs
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
        <ModalUpdate inputs={this.state.inputs} showModal={this.state.showModal} toggleModal={this.toggleModal} resource="question" title="Questão" fetchData={this.fetchData.bind(this)}/>
      </ReadTemplate>
    )
  }
}
