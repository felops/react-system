import React, { Component } from 'react';
import { Button, Card, CardBlock, CardTitle, Container, Form, FormGroup, Label, Row, Col, Input } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Container className="content">
        <Row>
          <Col>
            <Card>
              <CardBlock>
                <CardTitle>Login</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password"/>
                  </FormGroup>
                  <Button onClick={this.props.doLogin}>Submit</Button>
                </Form>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}
