const express = require('express')
//const auth = require('./auth')

module.exports = function (server) {

    const openApi = express.Router()
    server.use('/oapi', openApi)
    //const AuthService = require('../api/user/authService')
    //openApi.post('/login', AuthService.login)
    //openApi.post('/signup', AuthService.signup)
    //openApi.post('/validateToken', AuthService.validateToken)


    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    //protectedApi.use(auth)

    const pokemonService = require(
        '../api/pokemon/pokemonService')
    pokemonService.register(protectedApi, '/pokemons')

    //const pokemonSummaryService =
  //      require('../api/pokemonSummary/pokemonSummaryService')
    //protectedApi.route('/pokemonSummary').get(pokemonSummaryService.getSummary)
}
