const router = require('express').Router();
const postController = require('../controllers/postController');

router.route('/api/post').post(postController.create);
router.route('/api/post/all').get(postController.findAll);

module.exports = router;