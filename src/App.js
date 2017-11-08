import React, { Component } from 'react'

import Login from './screens/auth/Login'
import Router from './config/Routes'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isProfessor: false,
      isLoggedIn: false
    }
  }

  doLogin(e, state) {
    axios.post('http://localhost:3000/api/' + state.userType + '/login/', state).then((response) => {
      this.setState({
        isProfessor: state.userType === 'professor',
        isLoggedIn: response.data.data,
        loginMessage: response.data.msg
      })
    })
  }

  doLogoff() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    if(this.state.isLoggedIn === true) {
      return (
        <Router doLogoff={this.doLogoff.bind(this)} isProfessor={this.state.isProfessor}/>
      )
    } else {
      return (
        <Login doLogin={this.doLogin.bind(this)} msg={this.state.loginMessage}/>
      )
    }
  }
}
