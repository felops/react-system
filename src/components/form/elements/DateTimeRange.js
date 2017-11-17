import React, { Component } from 'react'

import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import Picker from 'rc-calendar/lib/Picker'
import TimePickerPanel from 'rc-time-picker/lib/Panel'
import moment from 'moment'

import 'rc-time-picker/assets/index.css'
import 'rc-calendar/assets/index.css'

export default class DateTimeRange extends Component {
  render() {
    const props = this.props,
          disabledDate = (currentDate) => moment().hour(0).minute(0).second(0).isAfter(currentDate),
          calendar = (<RangeCalendar
                        format={'DD/MM/YYYY HH:mm'}
                        disabledDate={disabledDate}
                        dateInputPlaceholder={['Início', 'Fim']}
                        timePicker={<TimePickerPanel  />}
                      />)
    return (
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
    )
  }
}
