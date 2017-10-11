import React, { Component } from 'react';
import LoginForm from './../../components/form/LoginForm';
import { Card, CardBlock, CardTitle, Container, Row, Col } from 'reactstrap';

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
              <CardBlock>
                <CardTitle>Login</CardTitle>
                <LoginForm button={button}/>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
