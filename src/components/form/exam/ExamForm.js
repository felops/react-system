import React, { Component } from 'react'
import axios from 'axios'
import FirstExamForm from './FirstExamForm'
import SectionExamForm from './SectionExamForm'

import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Steps, { Step } from 'rc-steps'

export default class ExamForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      isFinished: false,
      steps: [
        { title: 'Início' },
        { title: 'Seção 1' }
      ]
    }
  }

  onClick(e, state) {
    if(state.sections > 1) {
      let steps = this.state.steps
      for(let i = 2; i <= state.sections; i++) {
        steps.push({ title: 'Seção ' + i })
      }
      this.setState(steps)
    }

    let nextStep = this.state.currentStep + 1
    if(nextStep < this.state.steps.length) {
      this.setState({
        currentStep: nextStep,
      })
    } else {
    /*    axios.post('/api/exam', data).then((response) =>
          console.log(response)
        ) */
      this.setState({
        isFinished: true
      })
    }
  }

  render() {
    if(this.state.isFinished) {
      return (
        <div>
          <h5>Avaliação Gerada!</h5>
          <p>A avaliação já está disponível para os alunos da turma selecionada.</p>
        </div>
      )
    }

    let button = {
          onClick: this.onClick.bind(this),
          text: this.state.currentStep === this.state.steps.length - 1 ? 'Finalizar' : 'Próximo'
        }

    return (
      <div>
        <Steps labelPlacement="vertical" current={this.state.currentStep}>
          {this.state.steps.map((step, i) => <Step key={i} {...step} />)}
        </Steps>
        {
          this.state.steps.map((step, i) => {
            let className = this.state.currentStep === i ? '' : 'd-none'

            if(i === 0) {
              return <div className={className} key={i}><FirstExamForm button={button}/></div>
            }

            return <div className={className} key={i}><SectionExamForm button={button}/></div>
          })
        }
      </div>
    )
  }
}
