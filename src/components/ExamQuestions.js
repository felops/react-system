import React, { Component } from 'react';
import { Card, CardBlock, CardTitle, Col, Row } from 'reactstrap';
import Form from './form/Form';

export default class ExamQuestions extends Component {
  render() {
    return (
      <Card className="card-margin">
        <CardBlock>
        <Row>
          <Col>
              <CardTitle>{this.props.title}</CardTitle>
              <p className="text-muted">
                {this.props.question}
              </p>
              <Form inputs={this.props.options}/>
            </Col>
          </Row>
        </CardBlock>
      </Card>
    );
  }
}
