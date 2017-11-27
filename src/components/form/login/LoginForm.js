import React, { Component } from 'react'
import { Card, CardDeck, CardImg, CardBlock, Button } from 'reactstrap'
import LoginFormProfessor from './LoginFormProfessor'
import LoginFormStudent from './LoginFormStudent'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: null
    }
  }

  onClick(userType) {
    this.setState({
      userType: userType
    })
  }

  render() {
    const state = this.state

    if(state.userType) {
      if(state.userType === 'professor') {
        return <LoginFormProfessor button={this.props.button}/>
      }

      return <LoginFormStudent button={this.props.button}/>
    }

    return (
      <div>
        <CardDeck>
          <Card className="text-center cursor-pointer card-shadow" onClick={() => this.onClick('professor')}>
            <div className="text-center">
              <CardImg top width="50%" src="/images/teacher-desk.png" alt="Professor" />
            </div>
            <CardBlock>
              <Button color="primary" outline className="cursor-pointer">Acessar como Professor</Button>
            </CardBlock>
          </Card>
          <Card className="text-center cursor-pointer card-shadow" onClick={() => this.onClick('student')}>
            <div className="text-center">
              <CardImg top width="50%" src="/images/agenda.png" alt="Aluno" />
            </div>
            <CardBlock>
              <Button color="primary" outline className="cursor-pointer">Acessar como Aluno</Button>
            </CardBlock>
          </Card>
        </CardDeck>
        <section className="text-right">
          Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com" title="Flaticon">www.flaticon.com</a>
        </section>
      </div>
    )
  }
}
