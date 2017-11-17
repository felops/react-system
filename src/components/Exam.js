import React, { Component } from 'react'
import axios from 'axios'

import ExamQuestionCard from './ExamQuestionCard'

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

      return (<ExamQuestionCard key={question.id} {...question} title={'Questão ' + (i + 1)} handleChange={this.handleChange.bind(this)}/>)
    })
  }

  componentWillMount() {
    this.setState({questions: null })
    let exam = this.props.match.params.id

    if(exam) {
      axios.get('/api/exam/' + exam).then((response) => {
        this.setState({
          exam: response.data[0],
          questions: this.createQuestionComponents(response.data[0].ExamQuestions)
        })
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if(this.state.questions) {
      return (
        <div>
          <h3>{ this.state.exam.title }</h3>
          { this.state.questions }
        </div>
      )
    } else {
      return(<p className='text-muted'>carregando..</p>)
    }
  }
}
