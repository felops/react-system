import React from 'react';
import Content from './../components/layout/Content';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//import HomeStudent from './../screens/student/HomeStudent';
import CreateExam from './../screens/professor/CreateExam';
import HomeProfessor from './../screens/professor/HomeProfessor';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/createExam">Criar Avaliação</Link>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={this.props.doLogoff}>Sair</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Content>
            <Route exact path="/" component={HomeProfessor} />
            <Route path="/createExam" component={CreateExam} />
          </Content>
        </div>
      </Router>
    );
  }
}
