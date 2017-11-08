import React, { Component } from 'react'
import { Card, CardBlock, CardTitle, Col, Row } from 'reactstrap'
import Form from './form/Form'

export default class ExamQuestion extends Component {
  render() {
    return (
      <Card className="card-margin">
        <CardBlock>
        <Row>
          <Col>
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
