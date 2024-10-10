const fibonacci = [01, 02, 03, 05, 08, 13, 21]
const idealNumber = [03, 04, 05, 06, 07]


const isAIdealNumber = (count, numberIdeal) => {
  const result = numberIdeal.includes(count)
  return result
}

const filtroFibonacci = (jogo) => {

  let countFibonacci = 0

  jogo.forEach((dezena) => {
    let areThere = fibonacci.includes(dezena)
    if (areThere) {
      countFibonacci += 1
    }
  })
  return [isAIdealNumber(countFibonacci, idealNumber), `fibonacci: ${countFibonacci}`, '4-34 5-28 3-19 6-10 2-']
}

module.exports = filtroFibonacci
