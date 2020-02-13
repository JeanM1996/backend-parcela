const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let parcelaSchema = new Schema({
    agricultor: {
        type: String
    },
    extensión: {
        type: String
    },
    lugar: {
        type: String
    }
}, {
    collection: 'parcela'
})

module.exports = mongoose.model('parcela', parcelaSchema)