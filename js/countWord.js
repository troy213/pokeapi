const countWord = (input) => {
  const REGEX = /^[A-Za-z0-9-.,?]*$/
  const words = input.split(' ')
  let output = 0

  words.forEach((word) => {
    if (REGEX.test(word)) output += 1
  })

  return output
}

module.exports = countWord
