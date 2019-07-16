const router = require('express').Router();
const postController = require('../controllers/postController');

router.route('/api/post').post(postController.create);
router.route('/api/post/all').get(postController.findAll);
router.route('/api/editpost/:postid').get(postController.findOne);

module.exports = router;