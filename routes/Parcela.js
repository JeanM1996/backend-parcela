const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let parcelaSchema = new Schema({
    agricultor: {
        type: String
    },
    extension: {
        type: String
    },
    lugar: {
        type: String
    }
}, {
    collection: 'parcela'
})

module.exports = mongoose.model('parcela', parcelaSchema)