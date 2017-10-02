import React, { Component } from 'react';
import LoginForm from './../../components/form/LoginForm';
import { Button, Card, CardBlock, CardTitle, Container, Row, Col } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Container className="content">
        <Row>
          <Col>
            <Card>
              <CardBlock>
                <CardTitle>Login</CardTitle>
                <LoginForm/>
                <Button onClick={this.props.doLogin}>Submit</Button>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
