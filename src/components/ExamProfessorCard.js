import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
import { Card, CardBlock, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

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
              <Link to={'/estatiscas/' + this.props.exam.id} params={{id: 2}} className="float-right">Estatísticas</Link>
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
