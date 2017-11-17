import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'
import _ from 'lodash/object'
import { Alert } from 'reactstrap'

export default class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: null,
      error: null
    }
  }

  onClick(e, state) {
    let data = _.omit(state, 'buttonDisabled')
    axios.post('/api/' + this.props.resource, data).then((response) => {
      let data = response.data.data
      if(data) {
        this.setState({ msg: <Alert color="success">{ response.data.msg }</Alert> })
      } else {
        this.setState({ error: <Alert color="danger">{ response.data.error }</Alert> })
      }
    }).catch((error) => this.setState({ error: <Alert color="danger">{ error.toString() }</Alert> }))
  }

  render() {
    let button = {
          onClick: this.onClick.bind(this),
          text: 'Cadastrar'
        }

    return (
      <div>
        <h3>Cadastrar { this.props.title }</h3>
        { this.state.msg }
        { this.state.error }
        <Form inputs={ this.props.inputs } button={ button }/>
      </div>
    )
  }
}
