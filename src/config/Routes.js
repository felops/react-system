import React from 'react';
import Content from './../components/layout/Content';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import CreateExam from './../screens/professor/CreateExam';
import HomeProfessor from './../screens/professor/HomeProfessor';

import HomeStudent from './../screens/student/HomeStudent';
import DoExam from './../screens/student/DoExam';

const professor = ({
  links: (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link className="nav-link" to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/avaliacao">Criar Avaliação</Link>
      </NavItem>
    </Nav>
  ),
  routes: (
    <Content>
      <Route exact path="/" component={HomeProfessor} />
      <Route path="/avaliacao" component={CreateExam} />
    </Content>
  ),
});

const student = ({
  links: (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link className="nav-link" to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/avaliacao">Avaliação</Link>
      </NavItem>
    </Nav>
  ),
  routes: (
    <Content>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/avaliacao" component={DoExam} />
    </Content>
  ),
});

export default class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    if (this.props.isProfessor) {
      this.rounting = professor;
    } else {
      this.rounting = student;
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
              </Collapse>
            </Container>
          </Navbar>
          <Content>
            {this.rounting.routes}
          </Content>
        </div>
      </Router>
    );
  }
}
