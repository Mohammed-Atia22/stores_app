const express = require('express');
const router = express.Router();

const {
    createstore,
    getallstores,
    getstore,
    updatestore,
    deletestore
} = require('../controllers/store')


router.route('/')
    .post(createstore)
    .get(getallstores)
    


router.route('/:id')
    .get(getstore)
    .patch(updatestore)
    .delete(deletestore)


module.exports = router;

