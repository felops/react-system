import React, { Component } from 'react';
import ExamStudentCard from './../../components/ExamStudentCard';
import { Link } from 'react-router-dom';

const exams = [
  {
    title: 'Avaliação 4',
    right: 15,
    total: 16,
    date: '18/09/2017'
  },
  {
    title: 'Avaliação 3',
    right: 8,
    total: 16,
    date: '26/08/2017'
  },
  {
    title: 'Avaliação 2',
    right: 10,
    total: 16,
    date: '05/04/2017'
  },
  {
    title: 'Avaliação 1',
    right: 4,
    total: 16,
    date: '20/11/2016'
  }
];

const listExams = exams.map((exam) =>
  <ExamStudentCard exam={exam}/>
);

export default class HomeStudent extends Component {
  render() {
    return (
        <div>
          <h3>Avaliações diponíveis</h3>
          Existe uma avaliação disponível. <Link to="/avaliacao">Cliqui aqui começar!</Link>

          <section>
            <h3>Avaliações diponíveis</h3>
            {listExams}
          </section>
        </div>
    );
  }
}
