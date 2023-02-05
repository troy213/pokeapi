const countPairedSock = (input) => {
  let output = 0
  const unique = [...new Set(input)]

  unique.forEach((value) => {
    const uniqueLength = input.filter((x) => x === value).length
    const totalUniquePair = Math.floor(uniqueLength / 2)
    output += totalUniquePair
  })

  return output
}

module.exports = countPairedSock
