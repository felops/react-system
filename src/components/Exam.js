import React, { Component } from 'react';
import ExamQuestions from './ExamQuestions';

const questions = [
  {
    question: 'De acordo com o teorema de pareto, responda',
    options: [
      {
        type: 'radio',
        description: '80% dos efeitos provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '50% dos efeitos provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '80% da solução provém de 20% das problemas'
      },
      {
        type: 'radio',
        description: '20% dos erros provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '50% da solução provém de 1% das problemas'
      }
    ]
  },
  {
    question: 'De acordo com o teorema de pareto, responda',
    options: [
      {
        type: 'radio',
        description: '80% dos efeitos provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '50% dos efeitos provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '80% da solução provém de 20% das problemas'
      },
      {
        type: 'radio',
        description: '20% dos erros provém de 20% das causas'
      },
      {
        type: 'radio',
        description: '50% da solução provém de 1% das problemas'
      }
    ]
  }
];

const exameQuestions = questions.map((question, i) => {
  let number = i + 1;
  let questionName = 'question' + i;

  question.options.map((option, i) => {
    option.name = questionName;
  });

  return (<ExamQuestions key={i} {...question} title={'Questão ' + number}/>);
});

export default class Exam extends Component {
  render() {
    return (
      <section>
        {exameQuestions}
      </section>
    );
  }
}
