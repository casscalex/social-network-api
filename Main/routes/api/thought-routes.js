const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    removeReaction,
    createReaction
} = require('../../controllers/thought-controller');

//all route and post
router
.route('/')
.get(getAllThought)
.post(createThought);

//thought by i
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

//reactions
router
.route('/:thoughtId/reactions/').post(createReaction)

router
.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;