import React from 'react'
import { render, prettyDOM } from '@testing-library/react'
import App from '../App'

test('renders without crashing', () => {
  render(<App />)
  expect(prettyDOM()).toMatchSnapshot()
})