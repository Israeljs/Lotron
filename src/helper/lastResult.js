const results = require("../database/results")
const resultsJson = JSON.parse(results)

const lastResult = (quantity) => {
  let games = []
  for (let i = 0; i < quantity; i++) {
    games.push(`concurso: ${resultsJson[i].concurso}`, resultsJson[i].dezenas.map(Number))
  }
  return games
}

module.exports = lastResult
