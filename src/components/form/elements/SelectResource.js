import React, { Component } from 'react'
import Select from './Select'
import axios from 'axios'

export default class SelectResource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: -1,
      options: [{id: -1, name: 'carregando..'}]
    }
  }

  componentWillMount() {
    const props = this.props

    axios.get('/api/' + props.name).then((response) => {
      this.setState({
        options: response.data,
        value: 0
      })
    })
  }

  render() {
    const props = {
      ...this.props,
      value: this.state.value,
      options: this.state.options
    }

    return (
      <Select {...props} />
    )
  }
}
