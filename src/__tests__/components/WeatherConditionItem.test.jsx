import React from 'react'
import { render, screen } from '@testing-library/react'
import WeatherConditionItem from 'components/WeatherConditionItem'

describe('<WeatherConditionItem />', () => {
  it('should match snapshot', () => {
    render(
      <WeatherConditionItem
        data={{
          id: 6335317613215744,
          weather_state_name: 'Light Cloud',
          weather_state_abbr: 'lc',
          wind_direction_compass: 'SW',
          created: '2020-08-09T09:19:17.013321Z',
          applicable_date: '2020-08-09',
          min_temp: 14.29,
          max_temp: 20.58,
          the_temp: 21.93,
          wind_speed: 5.690000494517352,
          wind_direction: 230.00027977115613,
          air_pressure: 1013,
          humidity: 69,
          visibility: 9.235750715819613,
          predictability: 70,
        }}
      />,
    )
    const component = screen.getByTestId(`WeatherConditionItem-6335317613215744`)
    expect(component).toBeInTheDocument()
    expect(component.outerHTML).toMatchSnapshot()
  })
})
