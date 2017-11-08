import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class  extends Component {
  render() {
    return (
      <Container className="content">
        <Row>
          <Col>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}
