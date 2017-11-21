import React, { Component } from 'react'
import Select from './Select'
import axios from 'axios'

export default class SelectResource extends Component {
  componentWillMount() {
    const props = this.props

    this.setState({
      defaultValue: -1,
      options: [{id: -1, name: 'carregando..'}]
    })

    axios.get('/api/' + props.name).then((response) => {
      this.setState({
        defaultValue: 0,
        options: response.data
      })
    })
  }

  render() {
    let props = {
      ...this.props,
      options: this.state.options
    }

    if(props.value) {
      props.value = props.value
    } else {
      props.defaultValue = this.state.defaultValue
    }

    return (
      <Select {...props} />
    )
  }
}
