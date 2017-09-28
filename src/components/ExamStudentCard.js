import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

export default class ExamStudentCard extends Component {
  calcPercentage(value, total) {
    return value / total * 100;
  }

  render() {
    return (
      <Card className="card-margin">
        <CardBlock>
          <CardTitle>{this.props.exam.title}</CardTitle>
          <CardSubtitle>Realizada  em {this.props.exam.date}</CardSubtitle>
          <p className="text-muted">
            Você acertou {this.props.exam.right} de um total de {this.props.exam.total} questões
          </p>
          <div>
            Aproveitamento de <strong>
              {this.calcPercentage(this.props.exam.right,this.props.exam.total)}%
            </strong>
          </div>
          <ProgressBar value={this.calcPercentage(this.props.exam.right,this.props.exam.total)}/>
        </CardBlock>
      </Card>
    );
  }
}
