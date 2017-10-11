import React, { Component } from 'react';
import axios from 'axios';

import ExamQuestion from './ExamQuestion';

export default class Exam extends Component {
  createQuestionComponents(questions) {
    if(!questions) {
      return null;
    }

    return questions.map((question, i) => {
      question.Question.QuestionOptions.map((option) => {
        option.type = 'radio';
        option.name = 'question' + question.id;
        option.value = option.id;
        option.description = option.option;
        return option;
      });

      return (<ExamQuestion key={question.id} {...question} title={'Questão ' + (i + 1)}/>);
    });
  }

  componentWillMount() {
    this.setState({questions: null });
    let exam = this.props.exam;

    if(exam) {
      axios.get('http://localhost:3000/api/loadExam/' + exam).then((response) => {
        this.setState({
          questions: this.createQuestionComponents(response.data)
        });
      });
    }
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
