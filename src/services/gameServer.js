const gameGenerator = require('../helper/gameGenerator')

module.exports = {
  gameFilter: (quantity) =>  gameGenerator(quantity),
}
