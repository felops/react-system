import React from 'react'
import Content from './../components/layout/Content'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

import ClassCreate from './../screens/professor/create/ClassCreate'
import DisciplineCreate from './../screens/professor/create/DisciplineCreate'
import DisciplineFieldCreate from './../screens/professor/create/DisciplineFieldCreate'
import Exam from './../components/Exam'
import ExamCreate from './../screens/professor/create/ExamCreate'
import ExamResults from './../screens/professor/ExamResults'
import HomeProfessor from './../screens/professor/HomeProfessor'
import QuestionCreate from './../screens/professor/create/QuestionCreate'
import ProfessorCreate from './../screens/professor/create/ProfessorCreate'

import HomeStudent from './../screens/student/HomeStudent'
import DoExam from './../screens/student/DoExam'

const professor = ({
  links: (
    <Nav navbar>
      <NavItem>
        <Link className="nav-link" to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/avaliacao">Avaliação</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/categoria">Categoria</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/disciplina">Disciplina</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/questao">Questão</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/professor">Professor</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/turma">Turma</Link>
      </NavItem>
    </Nav>
  ),
  routes: (
    <Content>
      <Route exact path="/" component={HomeProfessor} />
      <Route exact path="/avaliacao" component={ExamCreate} />
      <Route exact path="/categoria" component={DisciplineFieldCreate} />
      <Route exact path="/disciplina" component={DisciplineCreate} />
      <Route exact path="/questao" component={QuestionCreate} />
      <Route exact path="/professor" component={ProfessorCreate} />
      <Route exact path="/turma" component={ClassCreate} />
      <Route path="/avaliacao/:id/detalhar" component={Exam} />
      <Route path="/avaliacao/:id/resultados" component={ExamResults} />
    </Content>
  ),
})

const student = ({
  links: (
    <Nav navbar>
      <NavItem>
        <Link className="nav-link" to="/">Home</Link>
      </NavItem>
    </Nav>
  ),
  routes: (
    <Content>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/avaliacao/:id" component={DoExam} />
    </Content>
  ),
})

export default class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  componentWillMount() {
    if (this.props.isProfessor) {
      this.rounting = professor
    } else {
      this.rounting = student
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="faded" light toggleable>
            <Container>
              <NavbarBrand href="/">ARANDU</NavbarBrand>
              <Collapse navbar>
                {this.rounting.links}
                <Nav navbar>
                  <NavItem>
                    <Link className="nav-link" to="/" onClick={this.props.doLogoff}>Logout</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Content>
            {this.rounting.routes}
          </Content>
        </div>
      </Router>
    )
  }
}
