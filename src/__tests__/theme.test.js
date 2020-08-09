import theme from 'theme'

describe('Test theme', () => {
  it(`should match snapshot`, () => {
    expect(theme).toMatchSnapshot()
  })
})
