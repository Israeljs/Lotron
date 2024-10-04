const gameGenerator = require('../helper/gameGenerator')

module.exports = {
  gameFilter: (quantity) =>  {
    const games = []
    for (let i = 0; i < quantity; i++) {
      games.push(gameGenerator())
    }
    return games
  },
}
