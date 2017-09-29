import React, { Component } from 'react';

import Content from './components/layout/Content';
import Login from './screens/auth/Login';
import HomeStudent from './screens/student/HomeStudent';
import HomeProfessor from './screens/professor/HomeProfessor';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
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
        <Content doLogoff={this.doLogoff.bind(this)}>
          <HomeProfessor/>
        </Content>
      );
    } else {
      return (
        <Login doLogin={this.doLogin.bind(this)}/>
      );
    }
  }
}
