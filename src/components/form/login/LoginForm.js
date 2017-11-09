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
      if(state.userType === 'Professor') {
        return <LoginFormProfessor button={this.props.button}/>
      }

      return <LoginFormStudent button={this.props.button}/>
    }

    return (
      <CardDeck>
        <Card className="text-center cursor-pointer card-shadow" onClick={() => this.onClick('Professor')}>
          <div className="text-center">
            <CardImg top width="50%" src="/images/teacher-desk.png" alt="Professor" />
          </div>
          <CardBlock>
            <Button className="cursor-pointer">Acessar como Professor</Button>
          </CardBlock>
        </Card>
        <Card className="text-center cursor-pointer card-shadow" onClick={() => this.onClick('Aluno')}>
          <div className="text-center">
            <CardImg top width="50%" src="/images/test.png" alt="Aluno" />
          </div>
          <CardBlock>
            <Button className="cursor-pointer">Acessar como Aluno</Button>
          </CardBlock>
        </Card>
      </CardDeck>
    )
  }
}
