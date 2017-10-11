import React, { Component } from 'react';

import Login from './screens/auth/Login';
import Router from './config/Routes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfessor: false,
      isLoggedIn: false
    };
  }

  doLogin(e, state) {
    this.setState({
      isProfessor: state.type===2,
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
        <Router doLogoff={this.doLogoff.bind(this)} isProfessor={this.state.isProfessor}/>
      );
    } else {
      return (
        <Login doLogin={this.doLogin.bind(this)}/>
      );
    }
  }
}
