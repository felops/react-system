import React from 'react'
import Content from './../components/layout/Content'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

import ClassRead from './../screens/professor/read/ClassRead'
import DisciplineRead from './../screens/professor/read/DisciplineRead'
import DisciplineFieldRead from './../screens/professor/read/DisciplineFieldRead'
import ExamRead from './../screens/professor/read/ExamRead'
import QuestionRead from './../screens/professor/read/QuestionRead'
import ProfessorRead from './../screens/professor/read/ProfessorRead'

import ClassCreate from './../screens/professor/create/ClassCreate'
import DisciplineCreate from './../screens/professor/create/DisciplineCreate'
import DisciplineFieldCreate from './../screens/professor/create/DisciplineFieldCreate'
import ExamCreate from './../screens/professor/create/ExamCreate'
import QuestionCreate from './../screens/professor/create/QuestionCreate'
import ProfessorCreate from './../screens/professor/create/ProfessorCreate'

import Exam from './../components/Exam'
import ExamResults from './../screens/professor/ExamResults'
import ExamResultsDetails from './../screens/professor/ExamResultsDetails'
import HomeProfessor from './../screens/professor/HomeProfessor'
import HomeStudent from './../screens/student/HomeStudent'
import DoExam from './../screens/student/DoExam'
import ExamPerformance from './../screens/student/ExamPerformance'

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
        <Link className="nav-link" to="/classe">Classe</Link>
      </NavItem>
    </Nav>
  ),
  routes: (
    <Content>
      <Route exact path="/" component={HomeProfessor} />
      <Route exact path="/avaliacao" component={ExamRead} />
      <Route exact path="/categoria" component={DisciplineFieldRead} />
      <Route exact path="/disciplina" component={DisciplineRead} />
      <Route exact path="/questao" component={QuestionRead} />
      <Route exact path="/professor" component={ProfessorRead} />
      <Route exact path="/classe" component={ClassRead} />
      <Route exact path="/avaliacao/cadastrar" component={ExamCreate} />
      <Route exact path="/categoria/cadastrar" component={DisciplineFieldCreate} />
      <Route exact path="/disciplina/cadastrar" component={DisciplineCreate} />
      <Route exact path="/questao/cadastrar" component={QuestionCreate} />
      <Route exact path="/professor/cadastrar" component={ProfessorCreate} />
      <Route exact path="/classe/cadastrar" component={ClassCreate} />
      <Route path="/avaliacao/:id/detalhar" component={Exam} />
      <Route path="/avaliacao/:id/resultados" component={ExamResults} />
      <Route path="/avaliacao/:avaliacao/questao/:questao" component={ExamResultsDetails} />
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
      <Route exact path="/avaliacao/:id" component={DoExam} />
      <Route exact path="/avaliacao/:id/resultado" component={ExamPerformance} />
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
