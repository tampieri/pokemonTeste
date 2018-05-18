const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, min: 0, required: true}

})

const pokemonSchema = new mongoose.Schema({
    id: {type: Number, min: 1, max: 12, required: true},
    name: {type: String, required: true},
    base_experience: {type: Number, min: 1, max: 3, required: true},
    height: {type: Number, min: 1, max: 3, required: true},
    is_default: {type: Boolean, required: true},
    order: {type: Number, min: 1, max: 3, required: true},
    weight: {type: Number, min: 1, max: 3, required: true},
    abilities: [
     {
         is_hidden: {type: Boolean, required: true},
         slot: {type: Number, min: 1, max: 3, required: true},
         ability: [{
             name:  {type: String, required: true},
             url:  {type: String, required: true},
         }],
     }
   ],
})

module.exports = restful.model('usuario', usuarioSchema)
module.exports = restful.model('Pokemon', pokemonSchema)
