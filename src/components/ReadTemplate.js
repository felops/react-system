import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReadTemplate extends Component {
  render() {
    let resource = this.props.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

    return (
      <div>
        <div className="float-right">
          <Link className="btn btn-outline-primary" to={resource + '/cadastrar'}>Criar { this.props.title }</Link>
        </div>
        <h3>{ this.props.title }</h3>
        {this.props.children}
      </div>
    )
  }
}
