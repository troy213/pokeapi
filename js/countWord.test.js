const countWord = require('./countWord')

const inputA = 'Kemarin Shopia per[gi ke mall.'
const inputB = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'
const inputC = 'Berapa u(mur minimal[ untuk !mengurus ktp?'
const inputD = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'

test('count all word without special character', () => {
  expect(countWord(inputA)).toBe(4)
  expect(countWord(inputB)).toBe(5)
  expect(countWord(inputC)).toBe(3)
  expect(countWord(inputD)).toBe(4)
})
