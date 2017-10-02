import React, { Component } from 'react';
import axios from 'axios';

import ExamQuestion from './ExamQuestion';

export default class Exam extends Component {
  createQuestionComponents(questions) {
    return questions.map((question, i) => {
      question.options.map((option) => {
        option.type = 'radio';
        option.name = 'question' + question.id;
      });

      return (<ExamQuestion key={question.id} {...question} title={'Questão ' + (i + 1)}/>);
    });
  }

  componentWillMount() {
    this.setState({questions: null });
    axios.get('http://localhost:3000/api/questions')
      .then((response) => this.setState({
        questions: this.createQuestionComponents(response.data)
      })
    );
  }

  render() {
    if(this.state.questions) {
      return (
        <section>
          {this.state.questions}
        </section>
      );
    } else {
      return(<p className='text-muted'>carregando..</p>);
    }
  }
}
