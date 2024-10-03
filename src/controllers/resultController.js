const resultService = require('../services/resultServer')

module.exports = {
  getResults: async (req, res) => {
    let quantity = req.params.id
    const results = await resultService.getResults(quantity);
    return res.status(200).json(results)
  },
}