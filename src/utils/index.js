export const hectogramToKilogram = (value = 0) => {
  const output = value / 10
  if (output % 1 !== 0) return parseFloat(output.toFixed(1))
  return output
}

export const decimeterToMeter = (value = 0) => {
  const output = value / 10
  if (output % 1 !== 0) return parseFloat(output.toFixed(1))
  return output
}
