import React, { Component } from 'react';
import LoginForm from './../../components/form/LoginForm';
import { Card, CardHeader, CardBlock, Container, Row, Col } from 'reactstrap';

export default class Login extends Component {
  render() {
    let button = {
      onClick: this.props.doLogin,
      text: 'Entrar'
    };

    return (
      <Container className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h3">Login</CardHeader>
              <CardBlock>
                <LoginForm button={button}/>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
