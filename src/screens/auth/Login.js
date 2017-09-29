import React, { Component } from 'react';
import InputForm from './../../components/InputForm';
import { Button, Card, CardBlock, CardTitle, Container, Form, Row, Col } from 'reactstrap';

const inputs = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    label: 'E-mail'
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Senha'
  }
];

export default class Login extends Component {
  componentDidMount() {
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const inputForm = inputs.map((input, i) =>
      <InputForm {...input} key={i} onChange={this.handleChange.bind(this)}/>
    );

    return (
      <Container className="content">
        <Row>
          <Col>
            <Card>
              <CardBlock>
                <CardTitle>Login</CardTitle>
                <Form>
                  {inputForm}
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
