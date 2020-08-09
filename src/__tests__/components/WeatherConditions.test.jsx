import React from 'react'
import { render, screen, prettyDOM } from '@testing-library/react'
import WeatherConditions from 'components/WeatherConditions'
import * as api from 'helpers/api-client'
import * as reactQuery from 'react-query'

describe('<WeatherConditions />', () => {
  it(`renders correct message if no locationId is provided`, () => {
    render(<WeatherConditions />)
    expect(
      screen.queryByText('Select a location above to see its weather'),
    ).toBeInTheDocument()
  })

  it(`calls API as expected`, () => {
    const apiFn = jest.spyOn(api, 'fetchLocationWeather')
    render(<WeatherConditions locationId={1} />)
    expect(apiFn).toBeCalledWith(1)
  })

  test(`loading state should be rendered correctly`, () => {
    jest
      .spyOn(reactQuery, 'useQuery')
      .mockImplementationOnce(() => ({ isLoading: true, data: null }))
    render(<WeatherConditions locationId={1} />)
    expect(screen.queryByRole('progressbar').outerHTML).toMatchSnapshot()
  })

  it(`displays an error message if the data is invalid`, () => {
    jest
      .spyOn(reactQuery, 'useQuery')
      .mockImplementationOnce(() => ({ isLoading: false, data: {} }))
    render(<WeatherConditions locationId={1} />)
    expect(
      screen.getByText(
        'Unable to load weather for this location. Please try again.',
      ),
    ).toBeInTheDocument()
    expect(prettyDOM()).toMatchSnapshot()
  })

  it(`should match snapshot with valid data`, () => {
    jest.spyOn(reactQuery, 'useQuery').mockImplementationOnce(() => ({
      isLoading: false,
      data: {
        consolidated_weather: [
          {
            id: 5268913807949824,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-08-09T09:59:46.911632Z',
            applicable_date: '2020-08-09',
            min_temp: 25.439999999999998,
            max_temp: 29.060000000000002,
            the_temp: 28.84,
            wind_speed: 5.391734226957237,
            wind_direction: 227.33346500159422,
            air_pressure: 1006.5,
            humidity: 89,
            visibility: 12.35689821442774,
            predictability: 77,
          },
          {
            id: 5850985559752704,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-08-09T09:59:49.883177Z',
            applicable_date: '2020-08-10',
            min_temp: 25.380000000000003,
            max_temp: 31.31,
            the_temp: 30.715,
            wind_speed: 6.883420905145947,
            wind_direction: 233.33805518929267,
            air_pressure: 1009.5,
            humidity: 78,
            visibility: 10.622340531297223,
            predictability: 77,
          },
          {
            id: 6698904378671104,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'WSW',
            created: '2020-08-09T09:59:53.136084Z',
            applicable_date: '2020-08-11',
            min_temp: 25.45,
            max_temp: 30.955,
            the_temp: 30.945,
            wind_speed: 6.562058036445824,
            wind_direction: 246.84161266913745,
            air_pressure: 1009.5,
            humidity: 77,
            visibility: 11.671215103793843,
            predictability: 77,
          },
          {
            id: 6596074540105728,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SW',
            created: '2020-08-09T09:59:55.841356Z',
            applicable_date: '2020-08-12',
            min_temp: 25.205,
            max_temp: 31.835,
            the_temp: 31.25,
            wind_speed: 6.3491703829953074,
            wind_direction: 225.66544858796593,
            air_pressure: 1010,
            humidity: 75,
            visibility: 11.381966813807365,
            predictability: 77,
          },
          {
            id: 4780906168451072,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SSW',
            created: '2020-08-09T09:59:59.044286Z',
            applicable_date: '2020-08-13',
            min_temp: 24.69,
            max_temp: 30.59,
            the_temp: 30.725,
            wind_speed: 5.843096151849202,
            wind_direction: 193.36271352165045,
            air_pressure: 1009.5,
            humidity: 76,
            visibility: 11.353694424560565,
            predictability: 77,
          },
          {
            id: 6671791122546688,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            wind_direction_compass: 'SSW',
            created: '2020-08-09T10:00:02.198435Z',
            applicable_date: '2020-08-14',
            min_temp: 23.985,
            max_temp: 29.759999999999998,
            the_temp: 28.51,
            wind_speed: 2.884762188817307,
            wind_direction: 192.5,
            air_pressure: 1011,
            humidity: 80,
            visibility: 8.026251690129643,
            predictability: 77,
          },
        ],
        time: '2020-08-09T17:16:08.127230+07:00',
        sun_rise: '2020-08-09T05:43:08.079116+07:00',
        sun_set: '2020-08-09T18:14:32.469358+07:00',
        timezone_name: 'LMT',
        parent: {
          title: 'Vietnam',
          location_type: 'Country',
          woeid: 23424984,
          latt_long: '15.974210,107.868042',
        },
        sources: [
          {
            title: 'BBC',
            slug: 'bbc',
            url: 'http://www.bbc.co.uk/weather/',
            crawl_rate: 360,
          },
          {
            title: 'Forecast.io',
            slug: 'forecast-io',
            url: 'http://forecast.io/',
            crawl_rate: 480,
          },
          {
            title: 'Met Office',
            slug: 'met-office',
            url: 'http://www.metoffice.gov.uk/',
            crawl_rate: 180,
          },
          {
            title: 'OpenWeatherMap',
            slug: 'openweathermap',
            url: 'http://openweathermap.org/',
            crawl_rate: 360,
          },
          {
            title: 'World Weather Online',
            slug: 'world-weather-online',
            url: 'http://www.worldweatheronline.com/',
            crawl_rate: 360,
          },
        ],
        title: 'Ho Chi Minh City',
        location_type: 'City',
        woeid: 1252431,
        latt_long: '10.759180,106.662498',
        timezone: 'Asia/Ho_Chi_Minh',
      },
    }))
    render(<WeatherConditions locationId={1} />)
    expect(prettyDOM()).toMatchSnapshot()
  })
})
