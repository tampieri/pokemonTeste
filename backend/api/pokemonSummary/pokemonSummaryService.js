const _ = require('lodash')
const Pokemon = require('../pokemon/pokemon')

function getSummary(req, res) {
    Pokemon.aggregate({
        $project: {abilities: {"abilities.slot"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, function(error, result) {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }
    })
}

module.exports = { getSummary }
