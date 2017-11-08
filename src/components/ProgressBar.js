import React, { Component } from 'react'
import { Progress } from 'reactstrap'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)

    this.state = { color: 'success' }
  }

  componentWillMount() {
    let color

    if (this.props.value < 30) {
      color = 'danger'
    } else if (this.props.value < 65) {
      color = 'warning'
    } else {
      color = 'success'
    }
    this.setState({ color })
  }

  render() {
    return (
      <Progress value={this.props.value}  color={this.state.color} />
    )
  }
}
