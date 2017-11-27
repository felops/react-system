import React, { Component } from 'react'
import ExamsTable from './../../components/professor/ExamsTable'
import { Link } from 'react-router-dom'

export default class HomeProfessor extends Component {
  render() {
    return (
      <div>
        <div className="float-right">
          <Link className="btn btn-outline-primary" to="/avaliacao">Criar Avaliação</Link>
        </div>
        <h3>Avaliações</h3>
        <section>
          <ExamsTable professor={localStorage.getItem('USER_ARANDU')}/>
        </section>
      </div>
    )
  }
}
