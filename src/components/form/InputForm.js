import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import Picker from 'rc-calendar/lib/Picker'
import TimePickerPanel from 'rc-time-picker/lib/Panel'
import moment from 'moment'

import 'rc-time-picker/assets/index.css'
import 'rc-calendar/assets/index.css'

export default class InputGroup extends Component {
  render() {
    let label
    const props = this.props

    if(props.label) {
      let requiredIndicator = props.required ? '*' : ''
      label = <Label for={props.id}>{props.label} <strong>{requiredIndicator}</strong></Label>
    }

    switch(props.type) {
      case 'select':
        const options = props.options.map((option, i) =>
          <option key={option.id} value={option.id}>{option.name}</option>
        )

        return (
          <FormGroup>
            {label}
            <Input type='select' name={props.name} id={props.id} onChange={props.onChange} required={props.required}>
              <option key="0" value="0">SELECIONE</option>
              {options}
            </Input>
          </FormGroup>
        )
      case 'radio':
        return (
          <FormGroup check>
            <Label check>
              <Input type="radio" name={props.name} value={props.value} onChange={props.onChange} required={props.required}/>
              {' ' + props.description}
            </Label>
          </FormGroup>
        )
      case 'rangedatetime':
        const disabledDate = (currentDate) => moment().hour(0).minute(0).second(0).isAfter(currentDate)
        const calendar = (<RangeCalendar
                            format={'DD/MM/YYYY HH:mm'}
                            disabledDate={disabledDate}
                            dateInputPlaceholder={['Início', 'Fim']}
                            timePicker={<TimePickerPanel  />}
                          />)
        return (
          <FormGroup>
            {label}
            <Picker
              animation="slide-up"
              calendar={calendar}
              onChange={(value) => {
                let e = {
                  target: {
                    name: 'range',
                    value: value
                  }
                }
                props.onChange(e)
              }}>
              {
                ({ value }) => {
                  return (
                    <input
                      style={{ width: 350 }}
                      className="form-control"
                      placeholder="Clique para selecionar"
                      value={(value && `${value[0].format('DD/MM/YYYY HH:mm')} até ${value[1].format('DD/MM/YYYY HH:mm')}`) || ''}
                    />
                  )
                }
              }
            </Picker>
          </FormGroup>
        )
      default:
        return (
          <FormGroup>
            {label}
            <Input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} required={props.required}/>
          </FormGroup>
        )
    }
  }
}
