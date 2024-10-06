const gameGenerator = require('../helper/gameGenerator')
const sumOfTensFilter = require('../filters/basicFilters/sumOfTensFilter')

module.exports = {
  gameFilter: (quantity) =>  {
    const games = []

    for (let i = 0; i < quantity; i++) {
      games.push(gameGenerator())
    }

    const gamesFiltered = games.filter((game) => sumOfTensFilter(game))

    return gamesFiltered
  },
}
