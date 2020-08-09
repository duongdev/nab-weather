const { default: theme } = require('theme')

describe('Test theme', () => {
  it(`should match snapshot`, () => {
    expect(theme).toMatchSnapshot()
  })
})
