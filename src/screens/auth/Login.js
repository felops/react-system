import React, { Component } from 'react'
import LoginForm from './../../components/form/login/LoginForm'
import { Card, CardHeader, CardBlock, Container, Row, Col } from 'reactstrap'

export default class Login extends Component {
  render() {
    let button = {
      onClick: this.props.doLogin,
      text: 'Entrar'
    }

    return (
      <Container className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h3">Login</CardHeader>
              <CardBlock>
                <p className="text-danger">{this.props.msg}</p>
                <LoginForm button={button}/>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
