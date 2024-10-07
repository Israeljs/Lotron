const sumOfTensFilter = (tens) => {
  let isAGodNumber = false
  const sumOfTens = tens.reduce((acc, value) => acc + value,0)

  if (sumOfTens >= 160 && sumOfTens <= 230) isAGodNumber = true

  return [isAGodNumber, `sum: ${sumOfTens}`, '170 a 220']
}

module.exports = sumOfTensFilter
