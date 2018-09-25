const cpf = require('../index')

describe('CPF', () => {
  it('blacklists common numbers', () => {
    expect(cpf.isValid('00000000000')).to.equal(false)
    expect(cpf.isValid('11111111111')).to.equal(false)
    expect(cpf.isValid('22222222222')).to.equal(false)
    expect(cpf.isValid('33333333333')).to.equal(false)
    expect(cpf.isValid('44444444444')).to.equal(false)
    expect(cpf.isValid('55555555555')).to.equal(false)
    expect(cpf.isValid('66666666666')).to.equal(false)
    expect(cpf.isValid('77777777777')).to.equal(false)
    expect(cpf.isValid('88888888888')).to.equal(false)
    expect(cpf.isValid('99999999999')).to.equal(false)
    expect(cpf.isValid('12345678909')).to.equal(false)
  })

  it('rejects falsy values', () => {
    expect(cpf.isValid('')).to.equal(false)
    expect(cpf.isValid(null)).to.equal(false)
    expect(cpf.isValid(undefined)).to.equal(false)
  })

  it('validates formatted strings', () => {
    expect(cpf.isValid('295.379.955-93')).to.equal(true)
  })

  it('validates unformatted strings', () => {
    expect(cpf.isValid('29537995593')).to.equal(true)
  })

  it('validates messed strings', () => {
    expect(cpf.isValid('295$379\n955...93')).to.equal(true)
  })

  it('strictly validates strings', () => {
    expect(cpf.isValid('295$379\n955...93', true)).to.equal(false)
    expect(cpf.isValid('295.379.955-93', true)).to.equal(true)
    expect(cpf.isValid('29537995593', true)).to.equal(true)
  })

  it('returns stripped number', () => {
    var number = cpf.strip('295.379.955-93')
    expect(number).to.eql('29537995593')
  })

  it('returns formatted number', () => {
    var number = cpf.format('29537995593')
    expect(number).to.eql('295.379.955-93')
  })

  it('generates formatted number', () => {
    var number = cpf.generate(true)

    expect(number).to.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    expect(cpf.isValid(number)).to.equal(true)
  })

  it('generates unformatted number', () => {
    var number = cpf.generate()

    expect(number).to.match(/^\d{3}\d{3}\d{3}\d{2}$/)
    expect(cpf.isValid(number)).to.equal(true)
  })
})