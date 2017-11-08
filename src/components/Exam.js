import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

import ExamQuestion from './ExamQuestion'

export default class Exam extends Component {
  createQuestionComponents(questions) {
    if(!questions) {
      return null
    }

    return questions.map((question, i) => {
      question.Question.QuestionOptions.map((option) => {
        option.type = 'radio'
        option.name = 'q' + question.id
        option.value = option.id
        option.description = option.option
        return option
      })

      return (<ExamQuestion key={question.id} {...question} title={'Questão ' + (i + 1)} handleChange={this.handleChange.bind(this)}/>)
    })
  }

  componentWillMount() {
    this.setState({questions: null })
    let exam = this.props.exam

    if(exam) {
      axios.get('http://localhost:3000/api/loadExam/' + exam).then((response) => {
        this.setState({
          questions: this.createQuestionComponents(response.data)
        })
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendExam(e) {
    let data = []
    for(let item in this.state) {
      if(item !== 'questions')
        data.push({
          student: 1,
          examQuestion: item.substr(1),
          questionOption: this.state[item]
        })
    }

    axios.post('http://localhost:3000/api/examStudent', data).then((response) => {
      console.log(response)
    })
  }

  render() {
    if(this.state.questions) {
      return (
        <section>
          {this.state.questions}
          <Button color="primary" className="helper-margin-top float-right" onClick={this.sendExam.bind(this)}>Enviar</Button>
        </section>
      )
    } else {
      return(<p className='text-muted'>carregando..</p>)
    }
  }
}
