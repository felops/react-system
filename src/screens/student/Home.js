import React, { Component } from 'react';
import ExamCard from './../../components/ExamCard';
import { Card, CardHeader, CardText, CardBlock, CardTitle, Container, Row, Col } from 'reactstrap';

const exams = [
  {
    title: 'Avaliação 1',
    right: 4,
    total: 16,
    date: '20/11/2016'
  },
  {
    title: 'Avaliação 2',
    right: 10,
    total: 16,
    date: '05/04/2017'
  },
  {
    title: 'Avaliação 3',
    right: 8,
    total: 16,
    date: '26/08/2017'
  },
  {
    title: 'Avaliação 4',
    right: 15,
    total: 16,
    date: '18/09/2017'
  }
];

const listExams = exams.map((exam) =>
    <ExamCard exam={exam}/>
  );

export default class Home extends Component {
  render() {
    return (
      <Card>
        <CardHeader>SEUS DADOS</CardHeader>
        <CardBlock>
          <CardTitle>Avaliações diponíveis</CardTitle>
          <CardText>Não há avaliações disponíveis no momento.</CardText>

          <CardTitle>Avaliações anteriores</CardTitle>
          <Container>
            <Row>
              <Col>
                {listExams}
              </Col>
            </Row>
          </Container>
        </CardBlock>
      </Card>
    );
  }
}
