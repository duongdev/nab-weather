import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import LocationSearchBox from 'components/LocationSearchBox'
import * as api from 'helpers/api-client'

describe('<LocationSearchBox />', () => {
  it(`renders a text box`, () => {
    render(<LocationSearchBox />)
    expect(
      screen.getByPlaceholderText('Search a location...'),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it(`calls API to search for locations and calls onChange`, async () => {
    const fetchLocationsFn = jest
      .spyOn(api, 'fetchLocations')
      .mockResolvedValueOnce(
        Promise.resolve([
          {
            title: 'Ho Chi Minh City',
            location_type: 'City',
            woeid: 1252431,
            latt_long: '10.759180,106.662498',
          },
        ]),
      )
    const onChange = jest.fn()

    render(<LocationSearchBox onChange={onChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Ho Chi Minh' } })
    await waitFor(() => {
      expect(screen.getByRole('option').innerHTML).toMatchSnapshot()
      expect(fetchLocationsFn).toBeCalledWith('Ho Chi Minh')
      const hcmOption = screen.getByTestId(`option-1252431`)
      fireEvent.click(hcmOption)
      expect(onChange).toBeCalledWith({
        title: 'Ho Chi Minh City',
        location_type: 'City',
        woeid: 1252431,
        latt_long: '10.759180,106.662498',
      })
    })
  })
})
