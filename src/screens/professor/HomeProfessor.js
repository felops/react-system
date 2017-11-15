import React, { Component } from 'react'
import ExamProfessorCard from './../../components/ExamProfessorCard'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class HomeProfessor extends Component {
  createList(exams) {
    return exams.map((exam, i) =>
      <ExamProfessorCard key={i} exam={exam}/>
    )
  }

  componentWillMount() {
    this.setState({exams: 'carregando..'})

    axios.get('/api/exams').then((response) => {
      response.data.map(exam => {
        exam.total = 42
        exam.wellPerformed = 25

        return exam
      })

      this.setState({
         exams: this.createList(response.data)
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Avaliações em andamento</h3>
        <p>Não há avaliações em andamento no momento.</p>
        <Link to="/avaliacao">Criar Avaliação</Link>
        <section>
          <h3>Avaliações anteriores</h3>
          {this.state.exams}
        </section>
      </div>
    )
  }
}
