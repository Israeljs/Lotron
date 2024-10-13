const fibonacci = [01, 02, 03, 05, 08, 13, 21]
const idealNumber = [02, 03, 04, 05, 06]


const isAIdealNumber = (count, numberIdeal) => {
  const result = numberIdeal.includes(count)
  return result
}

const fibonacciFilter = (game) => {

  let countFibonacci = 0

  game.forEach((ten) => {
    let areThere = fibonacci.includes(ten)
    if (areThere) {
      countFibonacci += 1
    }
  })
  return [isAIdealNumber(countFibonacci, idealNumber), `fibonacci: ${countFibonacci}`, '4-34 5-28 3-19 6-10 2-6']
}

module.exports = fibonacciFilter
