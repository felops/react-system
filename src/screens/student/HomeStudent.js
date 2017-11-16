import React, { Component } from 'react'
import ExamsTable from './../../components/student/ExamsTable'
import AvailableExamsTable from './../../components/student/AvailableExamsTable'

export default class HomeStudent extends Component {
  render() {
    return (
      <div>
        <h3>Avaliações em andamento</h3>
        <AvailableExamsTable studentClass={1}/>
        <section>
          <h3>Todas Avaliações</h3>
          <ExamsTable studentClass={1}/>
        </section>
      </div>
    )
  }
}
