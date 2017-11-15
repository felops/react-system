import React, { Component } from 'react'
import _ from 'lodash/collection'
import axios from 'axios'
import ExamQuestion from './../../components/ExamQuestion'

import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Steps, { Step } from 'rc-steps'

export default class DoExam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      error: '',
      questions: null,
      responses: {},
      isFinished: false,
      currentQuestion: null
    }
  }

  buttonClick(e) {
    const state = this.state

    if(state.responses[state.currentQuestion]) {
      axios.post('/api/examStudent', {
        student: 1,
        examQuestion: state.currentQuestion,
        questionOption: state.responses[state.currentQuestion]
      }).then((response) => {
        let nextStep = state.step + 1
        if(nextStep < state.questions.length) {
          this.setState({
            currentQuestion: state.questions[nextStep].id,
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
    let arrLength = questions.length

    return questions.map((question, i) => {
      question.Question.QuestionOptions.map((option) => {
        option.type = 'radio'
        option.name = 'q' + question.id
        option.value = option.id
        option.description = option.option
        return option
      })

      question.Question.QuestionOptions = _.shuffle(question.Question.QuestionOptions)

      let text = arrLength === i+1 ? 'Salvar e finalizar' : 'Salvar e prosseguir'
      question.button = {
        onClick: this.buttonClick.bind(this),
        text: text
      }

      return question
    })
  }

  componentWillMount() {
    let exam = this.props.match.params.id

    if(exam) {
      axios.get('/api/loadExam/' + exam).then((response) => {
        let questions = _.shuffle(response.data)

        this.setState({
          questions: this.formify(questions),
          currentQuestion: response.data[0].id
        })
      })
    }
  }

  renderError() {
    if (this.state.error) {
      return <div className="alert alert-danger" role="alert">{this.state.error}</div>
    }

    return null
  }

  render() {
      const state = this.state,
            isFinished = state.isFinished,
            questions = state.questions,
            step = state.step

      if(isFinished) {
        return (
          <div>
            <h5>Respostas enviadas!</h5>
            <p>Aguarde o final do exame para consultar seu desempenho.</p>
          </div>
        )
      } else if(questions) {
        let steps = questions.map((question, i) => <Step key={i}/>)

        return (
          <div>
            <Steps current={this.state.step}>
              {steps}
            </Steps>
            {this.renderError()}
            <ExamQuestion
              key={questions[step].id}
              {...questions[step]}
              title={'Questão ' + (step + 1)}
              handleChange={this.handleRadioChange.bind(this)} />
          </div>
        )
      } else {
        return <p className='text-muted'>carregando..</p>
      }
  }
}
