import React, { Component } from 'react';
import Header from './Header';
import { Container, Row, Col } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Header doLogoff={this.props.doLogoff.bind(this)}/>
        <Container className="content">
          <Row>
            <Col>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
