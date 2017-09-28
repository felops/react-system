import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { Button, Card, CardBlock, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

export default class ExamProfessorCard extends Component {
  calcPercentage(value, total) {
    return value / total * 100;
  }

  render() {
    return (
      <Card className="card-margin">
        <CardBlock>
        <Row>
          <Col>
              <CardTitle>{this.props.exam.title}</CardTitle>
              <CardSubtitle>Realizada  em {this.props.exam.date}</CardSubtitle>
              <p className="text-muted">
                Dos {this.props.exam.total} alunos, {this.props.exam.wellPerformed} atngiram notas maiores que 6,00.
              </p>
            </Col>
            <Col>
              <Button outline color="primary" className="float-right">Estatísticas</Button>
            </Col>
          </Row>
          <div>
            Proporção de alunos que obtiveram um rendimento satisfatório: <strong>
              {this.calcPercentage(this.props.exam.wellPerformed,this.props.exam.total)}%
            </strong>
          </div>
          <ProgressBar value={this.calcPercentage(this.props.exam.wellPerformed,this.props.exam.total)}/>
        </CardBlock>
      </Card>
    );
  }
}
