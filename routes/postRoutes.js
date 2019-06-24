const router = require('express').Router();
const postController = require('../controllers/postController');

router.route('/api/post').post(postController.create);

module.exports = router;