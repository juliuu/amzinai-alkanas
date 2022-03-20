const express = require('express');
const router = express.Router();

const { reviews, recipes, comments, messages, ratings } = require('../controllers');

router.get('/apzvalgos', reviews.findMany);
router.get('/apzvalgos/lookup', reviews.findAll);
router.get('/apzvalgos/total', reviews.findTotal);
router.get('/apzvalgos/top', reviews.findTop);
router.get('/apzvalgos/:id', reviews.findOne);
router.post('/apzvalgos', reviews.insertOne);
router.delete('/apzvalgos/:id', reviews.deleteOne);
router.put('/apzvalgos/:id', reviews.updateOne);

router.get('/receptai', recipes.findMany);
router.get('/receptai/lookup', recipes.findAll);
router.get('/receptai/total', reviews.findTotal);
router.get('/receptai/:id', recipes.findOne);
router.delete('/receptai/:id', recipes.deleteOne);
router.put('/receptai/:id', recipes.updateOne);

router.get('/comments/:id', comments.findMany);
router.post('/comments', comments.insertOne);

router.post('/message', messages.insertOne);

router.get('/rating/avg/:id', ratings.findMany);
router.get('/rating/:id', ratings.findOne);
router.put('/rating', ratings.updateOne);

module.exports = router;
