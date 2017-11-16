import React, { Component } from 'react'
import ExamsTable from './../../components/professor/ExamsTable'
import ExamProfessorCard from './../../components/ExamProfessorCard'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class HomeProfessor extends Component {
  render() {
    return (
      <div>
        <div className="float-right">
          <Link className="btn btn-outline-primary" to="/avaliacao">Criar Avaliação</Link>
        </div>
        <h3>Avaliações</h3>
        <section>
          <ExamsTable professor={1}/>
        </section>
      </div>
    )
  }
}
