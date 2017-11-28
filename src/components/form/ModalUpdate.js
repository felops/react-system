import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'
import _ from 'lodash/object'
import { Alert, Modal, ModalHeader, ModalBody } from 'reactstrap'

export default class ModalUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: null
    }
  }

  onClick(e, state) {
    let data = _.omit(state, 'buttonDisabled')
    console.log(state)
    axios.post('/api/' + this.props.resource + '/' + state.id, data).then((response) => {
      let data = response.data

      if(data) {
        this.setState({ msg: <Alert color="success">{ response.data.msg }</Alert> })
        this.props.fetchData()
      } else {
        this.setState({ msg: <Alert color="danger">{ response.data.error }</Alert> })
      }
    })
  }

  render() {
    let button = {
          onClick: this.onClick.bind(this),
          text: 'Alterar'
        }

    return (
      <Modal isOpen={this.props.showModal} toggle={this.props.toggleModal} backdrop={true} autoFocus={false}>
        <ModalHeader toggle={this.props.toggleModal}>Alterar { this.props.title }</ModalHeader>
        <ModalBody>
          { this.state.msg }
          <Form inputs={ this.props.inputs } button={ button }/>
        </ModalBody>
      </Modal>
    )
  }
}
