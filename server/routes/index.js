const express = require('express');
const router = express.Router();

const { reviews, recipes } = require('../controllers');

router.get('/apzvalgos', reviews.findMany);
router.get('/apzvalgos/total', reviews.findTotal);

router.get('/receptai', recipes.findMany);
router.get('/receptai/total', reviews.findTotal);

module.exports = router;
