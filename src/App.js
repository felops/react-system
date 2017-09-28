import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './screens/auth/Login';
import Home from './screens/student/Home';
import Header from './components/layout/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.doLogin = this.doLogin.bind(this);
    this.doLogoff = this.doLogoff.bind(this);
  }

  doLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  doLogoff() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <div>
          <Header doLogoff={this.doLogoff}/>
          <Container className="content">
            <Row>
              <Col>
                <Home/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <Login doLogin={this.doLogin}/>
      );
    }
  }
}
