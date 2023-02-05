const countPairedSock = require('./countPairedSock')

const inputA = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
const inputB = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const inputC = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
const inputD = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

test('count paired socks in the array', () => {
  expect(countPairedSock(inputA)).toBe(3)
  expect(countPairedSock(inputB)).toBe(3)
  expect(countPairedSock(inputC)).toBe(6)
  expect(countPairedSock(inputD)).toBe(4)
})
