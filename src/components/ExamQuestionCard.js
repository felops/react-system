import React, { Component } from 'react'
import { Card, CardBlock, CardTitle, Col, Row } from 'reactstrap'
import Form from './form/Form'
import CountDown from './CountDown'

export default class ExamQuestionCard extends Component {
  render() {
    const countDown = this.props.timeEnd ? <CountDown to={this.props.timeEnd} /> : null

    return (
      <Card className="card-margin">
        <CardBlock>
          <Row>
            <Col>
              { countDown }
              <CardTitle>{this.props.title}</CardTitle>
              <p className="text-muted">
                {this.props.Question.question}
              </p>
              <Form inputs={this.props.Question.QuestionOptions} button={this.props.button} handleChange={this.props.handleChange}/>
            </Col>
          </Row>
        </CardBlock>
      </Card>
    )
  }
}
