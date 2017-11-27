import React, { Component } from 'react'
import ExamsTable from './../../components/student/ExamsTable'
import AvailableExamsTable from './../../components/student/AvailableExamsTable'

export default class HomeStudent extends Component {
  render() {
    return (
      <div>
        <h3>Avaliações em andamento</h3>
        <AvailableExamsTable studentClass={localStorage.getItem('USER_CLASS_ARANDU')}/>
        <section>
          <h3>Todas Avaliações</h3>
          <ExamsTable studentClass={localStorage.getItem('USER_CLASS_ARANDU')}/>
        </section>
      </div>
    )
  }
}
