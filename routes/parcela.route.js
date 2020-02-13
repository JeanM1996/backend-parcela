let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//Model
let parcelaSchema = require('./Parcela');

//Create
router.route('/register-parcela').post((req, res, next) => {
    parcelaSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

//list
router.route('/').get((req, res) => {
    parcelaSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit-parcela/:id').get((req, res) => {
    parcelaSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;