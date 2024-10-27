// Dezenas Isoladas são aquelas que não tem suas dezenas vizinhas.
// https://tabelas.geradorlotofacil.com/tabela-quantidade-de-dezenas-isoladas
// https://www.geradorlotofacil.com/blog/filtro-nao-ter-as-dezenas-isoladas/
const arr = [01, 04, 07, 08, 10, 11, 12, 13, 14, 17, 19, 20, 22, 23, 25]

const numeroIdeal = [00, 01, 02, 03, 04, 05, 06]

const isolatedNumber = (isolatedTens) => {
  const result = numeroIdeal.includes(isolatedTens)
  return result
}

const isolatedTensFilter = (dezena) => {
  const isolated = []

  for (let i = 0; i <= dezena.length; i++) {
    let before = dezena[i] - dezena[i - 1]
    let after = dezena[i + 1] - dezena[i]

    if ((i === 0 && after > 1) || (i === 14 && before > 1)) {
      isolated.push(dezena[i])
    } else if (before > 1 && after > 1) {
      isolated.push(dezena[i])
    }
  }
  var isolatedLength = isolated.length

  return [isolatedNumber(isolatedLength), `isolated: ${isolatedLength}`, '3-27 2-25 4-17 1-15']
}

console.log(isolatedTensFilter(arr))

module.exports = isolatedTensFilter
