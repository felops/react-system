import React, { Component } from 'react'
import moment from 'moment'

export default class CountDown extends Component {
  componentWillMount() {
    let diff = moment(this.props.to).diff(moment())
    diff = diff > 0 ? diff : 0
    this.setState({
      diff: moment.duration(diff)
    }, () => setTimeout(this.updateTime.bind(this), 1000))
  }

  updateTime() {
    if(this.state.diff.seconds() > 0) {
      this.setState({
        diff: this.state.diff.subtract(1, 'second')
      })
      setTimeout(this.updateTime.bind(this), 1000)
    }
  }

  format() {
    return ('0' + this.state.diff.hours()).slice(-2) + ':' + ('0' + this.state.diff.minutes()).slice(-2)
  }

  render() {
    return (
      <span className="float-right">Tempo Restante: { this.format(this.state.diff) }</span>
    )
  }
}
