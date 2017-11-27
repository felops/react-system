import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { Button, Card, CardBlock } from 'reactstrap'
import ExamQuestionCard from './../../components/ExamQuestionCard'
import moment from 'moment'

import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Steps, { Step } from 'rc-steps'

export default class DoExam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      error: '',
      student: localStorage.getItem('USER_ARANDU'),
      questions: null,
      responses: {},
      isStarting: true,
      isFinished: false,
      currentQuestion: null
    }
  }

  componentWillMount() {
    let exam = this.props.match.params.id

    if(exam) {
      axios.get('/api/exam/' + exam + '/student/' + this.state.student).then((response) => {
        let exam = response.data[0]
        let questions = _.shuffle(exam.ExamQuestions)

        this.setState({
          exam: _.pick(exam, ['id', 'dateStart', 'dateEnd', 'title']),
          questions: this.formify(questions),
          currentQuestion: 0,
          feedback: {
            totalQuestions: questions.length,
            timeFinished: moment().isAfter(exam.dateEnd)
          }
        })
      })
    }
  }

  buttonClick(e) {
    const state = this.state

    if(state.isStarting || state.responses[state.currentQuestion]) {
      let nextStep = state.step + 1
      let nextQuestion
      if(nextStep === 1) {
        nextQuestion = state.questions[state.step].id
      } else {
        nextQuestion = state.questions[state.step - 1].id
        if(state.questions.length >= nextStep) {
          nextQuestion = state.questions[nextStep - 1].id
        }
      }

      axios.post('/api' +
                  '/student/' + state.student +
                  '/exam/' + state.exam.id +
                  '/question/' + state.currentQuestion,
      {
        questionOption: state.responses[state.currentQuestion],
        nextQuestion: nextQuestion,
      }).then((response) => {
        if(nextStep < state.questions.length + 1) {
          this.setState({
            isStarting: false,
            currentQuestion: nextQuestion,
            step: nextStep
          })
        } else {
          this.setState({ isFinished: true })
        }
      })
    } else {
      this.setState({ error: 'Selecione uma resposta antes de prosseguir.' })
    }
  }

  handleRadioChange(e) {
    const question = e.target.name.substr(1)

    this.setState({
      error: '',
      responses: {
        ...this.state.responses,
        [question]: e.target.value
      },
      currentQuestion: parseInt(question, 10),
    })
  }

  formify(questions) {
    let feedback = this.state.feedback
    let filteredQuestions = _.filter(questions, (o) => o.StudentAnswers.length === 0)
    let arrLength = filteredQuestions.length

    this.setState({
      totalAnsweredQuestions: questions.length - arrLength
    })

    return filteredQuestions.map((question, i) => {
      question.Question.QuestionOptions.map((option) => {
        option.type = 'radio'
        option.name = 'q' + question.id
        option.value = option.id
        option.description = option.option
        return option
      })

      question.Question.QuestionOptions = _.shuffle(question.Question.QuestionOptions)

      let text = arrLength - 1 === i ? 'Salvar e finalizar' : 'Salvar e prosseguir'
      question.button = {
        onClick: this.buttonClick.bind(this),
        text: text
      }

      return question
    })
  }

  renderError() {
    if (this.state.error) {
      return <div className="alert alert-danger" role="alert">{this.state.error}</div>
    }

    return null
  }

  render() {
      const state = this.state,
            exam = state.exam,
            isStarting = state.isStarting,
            isFinished = state.isFinished,
            questions = state.questions,
            step = state.step,
            feedback = state.feedback

      if(isFinished) {
        return (
          <Card className="card-margin">
            <CardBlock>
              <h5>Respostas enviadas!</h5>
              <p>Aguarde o final do exame para consultar seu desempenho.</p>
            </CardBlock>
          </Card>
        )
      } else if(questions) {
        if(feedback.totalQuestions === 0) {
          return (
            <div>
              <h5>{ exam.title }</h5>
              <p>Tem um erro neste exame: não existem questões cadastradas para ele.</p>
            </div>
          )
        } else if (feedback.timeFinished) {
          return (
            <div>
              <h5>{ exam.title }</h5>
              <p>Ops, parece que o tempo para finalizar a avaliação já expirou.</p>
            </div>
          )
        } else if (feedback.totalQuestions === state.totalAnsweredQuestions) {
         return (
           <div>
             <h5>{ exam.title }</h5>
             <p>Ops, parece que você já respondeu à todas questões.</p>
           </div>
         )
       }

        let steps = questions.map((question, i) => <Step key={i}/>)
        steps.push(<Step key={questions.length + 1}/>)

        if(isStarting) {
          return (
            <div>
              <Steps current={this.state.step}>
                {steps}
              </Steps>
              <Card className="card-margin">
                <CardBlock>
                  <h5>{exam.title}</h5>
                  <p>Você está pronto para responder às {questions.length} questões?</p>
                  <div>
                    As questões são salvas assim que você prossegue para a próxima e caso você já respondeu alguma questão anteriormente, ela não aparecerá novamente nesta avaliação. A submição das questões termina em {moment(exam.dateEnd).format('DD/MM/YYYY')} às {moment(exam.dateEnd).format('HH:mm')}.
                  </div>
                  <p><small className="text-muted">Boa sorte ;)</small></p>
                  <Button color="primary" onClick={this.buttonClick.bind(this)} className="cursor-pointer">
                    Sim, vamos lá!
                  </Button>
                </CardBlock>
              </Card>
            </div>
          )
        }

        return (
          <div>
            <Steps current={this.state.step}>
              {steps}
            </Steps>
            {this.renderError()}
            <ExamQuestionCard
              key={questions[step - 1].id}
              {...questions[step - 1]}
              title={'Questão ' + (step)}
              handleChange={this.handleRadioChange.bind(this)}
              timeEnd={exam.dateEnd} />
          </div>
        )
      } else {
        return <p className='text-muted'>carregando..</p>
      }
  }
}
