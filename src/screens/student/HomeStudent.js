import React, { Component } from 'react';
import ExamStudentCard from './../../components/ExamStudentCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class HomeStudent extends Component {
  createList(exams) {
    return exams.map((exam, i) =>
      <ExamStudentCard key={i} exam={exam}/>
    );
  }

  componentWillMount() {
    this.setState({exams: 'carregando..'});

    axios.get('http://localhost:3000/api/exams').then((response) => {
      response.data.map(exam => {
        exam.total = 42;
        exam.right = 25;

        return exam;
      });

      this.setState({
         exams: this.createList(response.data)
      });
    });
  }

  render() {
    return (
        <div>
          <h3>Avaliações diponíveis</h3>
          Existe uma avaliação em andamento. <Link to={'/avaliacao/' + 1}>Cliqui aqui começar!</Link>
          <section>
            <h3>Avaliações diponíveis</h3>
            {this.state.exams}
          </section>
        </div>
    );
  }
}
