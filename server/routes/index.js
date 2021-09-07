const express = require('express');
const router = express.Router();

const { reviews, recipes } = require('../controllers');

router.get('/apzvalgos', reviews.findMany);
router.get('/apzvalgos/total', reviews.findTotal);
router.get('/apzvalgos/top', reviews.findTop);
router.get('/apzvalgos/:id', reviews.findOne);

router.get('/receptai', recipes.findMany);
router.get('/receptai/total', reviews.findTotal);
router.get('/receptai/:id', recipes.findOne);

module.exports = router;
