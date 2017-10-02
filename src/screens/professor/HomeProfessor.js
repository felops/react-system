import React, { Component } from 'react';
import ExamProfessorCard from './../../components/ExamProfessorCard';
import { Link } from 'react-router-dom';

const exams = [
  {
    title: 'Avaliação 4',
    wellPerformed: 38,
    total: 42,
    date: '18/09/2017'
  },
  {
    title: 'Avaliação 3',
    wellPerformed: 16,
    total: 32,
    date: '26/08/2017'
  },
  {
    title: 'Avaliação 2',
    wellPerformed: 21,
    total: 39,
    date: '05/04/2017'
  },
  {
    title: 'Avaliação 1',
    wellPerformed: 5,
    total: 42,
    date: '20/11/2016'
  }
];

const listExams = exams.map((exam, i) =>
  <ExamProfessorCard key={i} exam={exam}/>
);

export default class HomeProfessor extends Component {
  render() {
    return (
      <div>
        <h3>Avaliações em andamento</h3>
        <p>Não há avaliações em andamento no momento.</p>
        <Link to="/avaliacao">Criar Avaliação</Link>
        <section>
          <h3>Avaliações anteriores</h3>
          {listExams}
        </section>
      </div>
    );
  }
}
