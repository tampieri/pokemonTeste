const mongoose = require ('mongoose')
module.exports = mongoose.connect('mongodb://localhost/pokemon')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
