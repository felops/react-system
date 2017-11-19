import React, { Component } from 'react'
import { Input, Col, Row } from 'reactstrap'
import Select from './Select'
import SelectResource from './SelectResource'
import axios from 'axios'

const discipline = {
  type: 'selectResource',
  name: 'discipline',
  id: 'discipline',
  required: true
}

const defaultSelect =
  <Input type='select' name='disciplineField' id='disciplineField' required={true} defaultValue={0}>
    <option key="0" value="0">SELECIONE A DISCIPLINA</option>
  </Input>

export default class SelectDisciplineField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: -1,
      options: [{id: -1, name: 'carregando..'}],
      select: defaultSelect
    }
  }

  getDisciplineField(value) {
    this.setState({
      value: -1,
      options: [{id: -1, name: 'carregando..'}]
    })

    axios.get('/api/discipline/' + value + '/field').then((response) => {
      let options = response.data.map((option) => {
        return {
          id: option.id,
          name: option.name
        }
      })

      this.setState({
        select: <Select {...this.props} options={options}/>,
        value: 0
      })
    })
  }

  onChange(e) {
    let value = e.target.value
    this.setState({
      select: parseInt(value) === 0 ? defaultSelect : this.getDisciplineField(value)
    })
  }

  render() {
    return (
      <Row>
        <Col>
          <SelectResource {...discipline} onChange={this.onChange.bind(this)} />
        </Col>
        <Col>
          {this.state.select}
        </Col>
      </Row>
    )
  }
}
