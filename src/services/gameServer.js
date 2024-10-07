const gameGenerator = require('../helper/gameGenerator')
const sumOfTensFilter = require('../filters/basicFilters/sumOfTensFilter')
const alreadyWonFilter = require('../filters/basicFilters/alreadyWonFilter')

module.exports = {
  gameFilter: (quantity) =>  {
    const games = []

    for (let i = 0; i < quantity; i++) {
      games.push(gameGenerator())
    }

    const gamesFiltered = games.filter((game) => sumOfTensFilter(game)[0])
      .filter((game) => alreadyWonFilter(game)[0])

    return gamesFiltered
  },
}
